import axios from "axios";

const BASE_API = axios.create({ baseURL: "http://localhost:8080/api/v1" });

async function getNews(searchText) {
  try {
    const res = await BASE_API.get("/news/get/" + searchText);
    

    if (res.data.status === "ok") {
      // here we are reuturning a json file with keys called error and data
      return { error: false, data: res.data.articles };
    } else {
      return { error: true, data: "Unknown Error" };
    }
  } catch (error) {
    return { error: true, data: "error" };
  }
}

export { getNews };
