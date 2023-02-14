import { wanted } from "./api";

export const getTodos = async () => {
  try {
    if (localStorage.getItem("login")) {
      return await wanted("todos", {
        method: "GET",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
