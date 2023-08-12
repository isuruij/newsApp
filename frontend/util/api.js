import axios from "axios";

const BASE_API = axios.create({ baseURL: "http://localhost:5050/api/v1" });

async function getNews() {
  try {
    const res = await BASE_API.get("/news/get");
    if (res.data.status === "ok") {
      return { error: false, data: res.data.articles };
    } else {
      return { error: true, data: "Unknown Error" };
    }
  } catch (error) {
    return { error: true, data: "error" };
  }
}

export { getNews };
