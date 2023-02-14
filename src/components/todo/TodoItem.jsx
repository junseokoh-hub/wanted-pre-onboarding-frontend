import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { deleteTodo } from "../../libs/deleteTodo";
import { updateTodo } from "../../libs/updateTodo";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState("");
  const { reLoadTodos } = useContext(TodoContext);

  const modifyTodoHandler = (e) => {
    setModifiedTodo(e.target.value);
  };

  const textEditHandler = () => {
    setIsEdit(true);
  };

  const checkEditHandler = () => {
    updateTodo(todo.id, todo.todo, !todo.isCompleted).then(reLoadTodos);
  };

  const submitHandler = () => {
    updateTodo(todo.id, modifiedTodo, todo.isCompleted).then(() => {
      setIsEdit(false);
      reLoadTodos();
    });
  };

  const deleteHandler = () => {
    deleteTodo(todo.id).then(reLoadTodos);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={checkEditHandler}
        />
        {isEdit ? (
          <input
            type="text"
            data-testid="modify-input"
            value={modifiedTodo}
            onChange={modifyTodoHandler}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      {isEdit ? (
        <button onClick={submitHandler} data-testid="submit-button">
          제출
        </button>
      ) : (
        <button onClick={textEditHandler} data-testid="modify-button">
          수정
        </button>
      )}
      <button type="submit" onClick={deleteHandler} data-testid="delete-button">
        삭제
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
