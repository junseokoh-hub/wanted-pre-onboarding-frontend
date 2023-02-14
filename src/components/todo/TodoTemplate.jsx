import styled from "@emotion/styled";
import React from "react";

const TodoWrapper = styled.section`
  width: 50%;
  border: 1px solid black;
`;

const TodoTemplate = ({ children }) => {
  return <TodoWrapper>{children}</TodoWrapper>;
};

export default TodoTemplate;
