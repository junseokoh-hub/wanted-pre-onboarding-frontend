import axios from "axios";

const token = localStorage.getItem("login");

export const wanted = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    Authorization: token ? `Bearer ${token}` : ``,
    "Content-Type": "application/json",
  },
});
