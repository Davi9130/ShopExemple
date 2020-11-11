import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../static/imagens/logo.png";

const Nav = () => {
  const NavUl = styled.ul`
    display: table-cell;
  `;

  const NavLi = styled.li`
    list-style-type: none;
    float: left;
  `;

  const LiP = styled.p`
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      background: white;
    }
  `;

  return (
    <div style={{ padding: "10px", backgroundColor: "black" }}>
      <NavUl>
        <Link to="/shop">
          <img
            style={{
              width: "150px",
              marginTop: "10px",
              marginRight: "100%",
              marginBottom: "5px",
            }}
            src={logo}
            alt="logo"
          />
        </Link>
        <NavLi>
          <LiP>
            <Link to="/">Login</Link>
          </LiP>
        </NavLi>
        <NavLi>
          <LiP>
            <Link to="/shop">Produtos</Link>
          </LiP>
        </NavLi>
        <NavLi>
          <LiP>
            <Link to="/sobre">Sobre</Link>
          </LiP>
        </NavLi>
        <NavLi>
          <LiP>
            <Link to="/contato">Contato</Link>
          </LiP>
        </NavLi>
      </NavUl>
    </div>
  );
};

export default Nav;
