import { wanted } from "./api";

export const createTodo = async (data) => {
  try {
    return await wanted("todos", {
      method: "POST",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
