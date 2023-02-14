import { wanted } from "./api";

export const updateTodo = async (id, todo, isCompleted) => {
  try {
    return await wanted(`todos/${id}`, {
      method: "PUT",
      data: {
        todo,
        isCompleted,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
