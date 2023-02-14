import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <Main>
      <NavigationBar />
      <Outlet />
    </Main>
  );
};

export default Layout;
