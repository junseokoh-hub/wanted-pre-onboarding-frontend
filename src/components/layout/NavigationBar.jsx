import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = styled.header`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.mainColor};
  nav {
    display: flex;
    justify-content: space-between;
  }
`;

const SignLink = styled(Link)`
  padding: 0.5rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: #fff;
  }
`;

const HomeBtn = styled(SignLink)``;

const LogoutBtn = styled(SignLink)`
  background-color: transparent;
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = localStorage.getItem("login");

  const currentPath = pathname === "/signup" ? "로그인" : "회원가입";
  const pathRoute = pathname === "/signup" ? "/signin" : "signup";

  const logoutHandler = () => {
    localStorage.removeItem("login");
    navigate("/signin", { replace: true });
  };

  return (
    <Header>
      <nav>
        <HomeBtn to={"/todo"}>홈</HomeBtn>
        {isAuth ? (
          <LogoutBtn onClick={logoutHandler}>로그아웃</LogoutBtn>
        ) : (
          <SignLink to={pathRoute}>{currentPath}</SignLink>
        )}
      </nav>
    </Header>
  );
};

export default NavigationBar;
