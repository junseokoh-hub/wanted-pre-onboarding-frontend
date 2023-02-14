import styled from "@emotion/styled";
import React, { useContext, useRef } from "react";
import { TodoContext } from "../../context/todoContext";
import { createTodo } from "../../libs/createTodo";

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  input {
    padding: 0 0.5rem;
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 5rem;
    flex-grow: 1;
    color: #fff;
    background-color: ${(props) => props.theme.mainColor};
    border: none;
    cursor: pointer;
  }
`;

const TodoInsert = () => {
  const todoRef = useRef("");
  const { reLoadTodos } = useContext(TodoContext);

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    createTodo({ todo: todoRef.current.value }).then(() => {
      reLoadTodos();
      todoRef.current.value = "";
    });
  };

  return (
    <TodoForm onSubmit={todoSubmitHandler}>
      <input data-testid="new-todo-input" type="text" ref={todoRef} />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </TodoForm>
  );
};

export default TodoInsert;
