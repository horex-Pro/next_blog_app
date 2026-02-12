import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

/**
 * RESPONSE INTERCEPTOR
 */
app.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    // If no response or not 401 → reject immediately
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Prevent infinite loop
    if (originalConfig._retry) {
      return Promise.reject(error);
    }

    originalConfig._retry = true;

    try {
      /**
       * IMPORTANT:
       * Forward cookies manually when running on server
       */
      const cookieHeader =
        originalConfig?.headers?.Cookie || originalConfig?.headers?.cookie;

      await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
        {
          headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
          withCredentials: true,
        },
      );

      // Retry original request
      return app(originalConfig);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);

export default app;
