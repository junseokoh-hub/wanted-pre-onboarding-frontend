import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todoContext";
import TodoItem from "./TodoItem";

const TodoContainer = styled.ul`
  min-height: 18rem;
  max-height: 32rem;
  overflow-y: auto;
`;

const TodoList = () => {
  const { todos, reLoadTodos } = useContext(TodoContext);

  useEffect(() => {
    reLoadTodos();
  }, [reLoadTodos]);

  return (
    <TodoContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoContainer>
  );
};

export default TodoList;
