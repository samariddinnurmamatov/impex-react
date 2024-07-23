import ApiService from "./Apiservice";

export async function apiGetPosts(params = {}) {
  return ApiService.fetchData({
    url: "/posts",
    method: "get",
    params,
  });
}
