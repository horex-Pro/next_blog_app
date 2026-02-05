import http from "./httpService";

export async function createCommentApi(data) {
  return http.post("/comment/add", data).then(({ data }) => data.data);
}
