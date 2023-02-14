import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TodoPage from "./pages/TodoPage";
import NotFound from "./pages/NotFound";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const isAuth = localStorage.getItem("login");

  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Navigate to="todo" />,
        },
        {
          path: "todo",
          element: isAuth ? <TodoPage /> : <Navigate to="/signin" />,
        },
        {
          path: "signin",
          element: !isAuth ? <SigninPage /> : <Navigate to="/todo" />,
        },
        {
          path: "signup",
          element: !isAuth ? <SignupPage /> : <Navigate to="/todo" />,
        },
      ],
    },
  ]);
  return element;
};

export default App;
