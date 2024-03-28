import { getApiData } from "./api";

export const getTodos = async () => getApiData("/todos");
