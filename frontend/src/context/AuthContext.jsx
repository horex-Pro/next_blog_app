"use client";

import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";

import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "signin":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
  }
};

export default function AuthProvider({ children }) {
  const [{ user, isLoading, isAuthenticated, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const router = useRouter();

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      toast.success(message);
      dispatch({ type: "signin", payload: user });
      router.push("/profile");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "خطایی رخ داده است";
      dispatch({ type: "rejected", payload: errorMessage });
      toast.error(errorMessage);
    }
  }

  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      toast.success(message);
      dispatch({ type: "signup", payload: user });
      router.push("/profile");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "خطایی رخ داده است";
      dispatch({ type: "rejected", payload: errorMessage });
      toast.error(errorMessage);
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "خطایی رخ داده است";
      dispatch({ type: "rejected", payload: errorMessage });
      toast.error(errorMessage);
    }
  }

  useEffect(() => {
    async function loadUser() {
      await getUser();
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
