import { wanted } from "./api";

export const signup = async (data) => {
  try {
    return await wanted("auth/signup", {
      method: "POST",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
