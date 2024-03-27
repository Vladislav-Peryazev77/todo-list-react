import { getApiData } from "./api";

export const getTodos = () => {
  getApiData("https://jsonplaceholder.typicode.com/todos");
};
