import { wanted } from "./api";

export const deleteTodo = async (todoId) => {
  try {
    return await wanted(`todos/${todoId}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error(error);
  }
};
