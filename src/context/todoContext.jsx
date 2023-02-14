import { createContext, useCallback, useState } from "react";
import { getTodos } from "../libs/getTodos";

export const TodoContext = createContext({
  todos: [],
  reLoadTodos: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const reLoadTodos = useCallback(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  const value = { todos, reLoadTodos };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
