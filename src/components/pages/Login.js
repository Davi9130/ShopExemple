import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import "antd/dist/antd.css";
import { GlobalContext } from "../Hooks/GlobalContext";
import Fundo from "../../static/imagens/fundo.webp";

import { Spin } from "antd";

const Login = () => {
  const global = React.useContext(GlobalContext);
  const setLogin = global.setModal;
  const login = global.modal;
  const modalRegister = global.modalRegister;
  const setModalRegister = global.setModalRegister;
  const loading = global.loading;
  const setLoading = global.setLoading;

  const Container = styled.div`
    text-align: center;
    display: table;
    margin: auto;
    margin-top: 10%;
    border: solid 1px black;
    background-color: white;
    padding: 100px;
    border-radius: 1%;
    margin-bottom: 23em;
    background-image: url(${Fundo});
  `;

  const Titulo = styled.h1`
    color: black;
    font-weight: 600;
  `;

  const loginFunc = () => {
    setLoading(!loading);
    setLogin(!login);
  };
  const registerFunc = () => {
    setLoading(!loading);
    setModalRegister(!modalRegister);
  };

  return (
    <>
      <Container>
        <Titulo>Bem Vindo a Loja Virtual</Titulo>
        <br />
        {loading ? <Spin /> : null}
        <br />
        <Button onClick={loginFunc}>Entrar 😁</Button>
        <Button onClick={registerFunc}>Registrar 👌</Button>
        {login ? <ModalLogin /> : null}
        {modalRegister ? <ModalRegister /> : null}
      </Container>
    </>
  );
};

export default Login;
