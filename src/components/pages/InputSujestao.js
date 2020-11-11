import React from "react";
import styled from "styled-components";

const InputSujestao = () => {
  const InpuTtype = styled.input`
    width: 200px;
  `;
  const InputTextArea = styled.textarea`
    width: 500px;
  `;
  return (
    <form
      style={{
        display: "table",
        margin: "auto",
        marginBottom: "30rem",
        marginTop: "10rem",
      }}
    >
      <InpuTtype type="text" placeholder="Nome" />
      <br />
      <InpuTtype type="text" placeholder="Email" />
      <br />
      <InputTextArea
        placeholder="Texto"
        name="Texto"
        id="1"
        cols="30"
        rows="10"
      ></InputTextArea>
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default InputSujestao;
