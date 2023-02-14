import { wanted } from "./api";

export const signin = async (data) => {
  try {
    return await wanted("auth/signin", {
      method: "POST",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
