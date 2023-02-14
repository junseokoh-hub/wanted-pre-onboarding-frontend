import React from "react";
import TodoList from "../components/todo/TodoList";
import TodoTemplate from "../components/todo/TodoTemplate";
import TodoInsert from "../components/todo/TodoInsert";

const Home = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default Home;
