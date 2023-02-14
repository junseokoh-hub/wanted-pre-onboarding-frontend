import React, { useState } from "react";
import { signup } from "../../libs/signup";
import { signin } from "../../libs/signin";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 0.8rem;
  color: #fff;
`;

const Div = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin: 0.5rem 0;
  }
  input {
    padding: 1rem;
    border: 1px solid #fff;
  }
`;

const Button = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  width: 12.5rem;
  &:not([disabled]) {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: #fff;
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      return;
    }

    if (password.length < 8) {
      return;
    }

    if (isLogin) {
      signin({ email, password })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("login", res.data.access_token);
            if (localStorage.getItem("login")) {
              window.location.href = "/todo";
            }
          }
        })
        .catch((error) => {
          if (error.message.includes("401")) {
            alert(`정확한 정보를 입력해주세요`);
          } else if (error.message.includes("404")) {
            alert(`존재하지 않는 이메일입니다. 다시 입력해주세요`);
          }
        });
    } else {
      signup({ email, password })
        .then((res) => {
          if (res.status === 201) {
            alert(`회원가입을 성공하셨습니다`);
            navigate("/signin");
          }
        })
        .catch((error) => alert(`이미 존재하는 이메일 입니다`));
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          data-testid="email-input"
          type="email"
          value={email}
          onChange={emailChangeHandler}
        />
      </Div>
      <Div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          data-testid="password-input"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
        />
      </Div>
      <Button
        disabled={!email.includes("@") || password.length < 8}
        data-testid={isLogin ? "signin-button" : "signup-button"}
      >
        {isLogin ? "로그인" : "회원가입"}
      </Button>
    </Form>
  );
};

export default AuthForm;
