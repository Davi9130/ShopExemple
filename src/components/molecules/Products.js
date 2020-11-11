import React from "react";
import { Card, Image } from "antd";
import Button from "../atoms/Button";
import styled from "styled-components";
import { produtos } from "../../static/produtos";

const Products = () => {
  const estilo = {
    width: 340,
    margin: " auto",
  };

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    margin-bottom: 5%;
  `;
  const GridDivContainer = styled.div`
    text-align: center;
    margin: auto;
    margin-top: 100px;
    height: auto;
    border-style: solid;
  `;

  const { Meta } = Card;
  return (
    <GridContainer>
      {produtos.map((p) => (
        <GridDivContainer key={p.id}>
          <Card
            key={p.id}
            hoverable
            style={estilo}
            cover={<Image width={340} src={p.src} />}
          >
            <Meta title={p.nome} description={`Valor : ${p.valor} $$`} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "35px",
              }}
            >
              <Button>Adicionar ao Carrinho</Button>
              <Button>Ver Informações</Button>
            </div>
          </Card>
        </GridDivContainer>
      ))}
    </GridContainer>
  );
};

export default Products;
