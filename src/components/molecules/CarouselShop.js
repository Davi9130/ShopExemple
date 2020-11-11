import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import produto from "../../static/imagens/produtos.png";
import roupas from "../../static/imagens/roupa.jpg";

const CarouselShop = () => {
  const contentStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    height: "30rem",
    width: "auto",
  };

  const Container = styled.div`
    height: auto;
    width: auto;
  `;

  return (
    <div style={{ marginTop: "50px", width: "auto" }}>
      <Carousel
        style={{
          width: "100%",
        }}
        autoplay
      >
        <Container>
          <img src={produto} alt="pruduto" style={contentStyle} />
        </Container>
        <Container>
          <img src={roupas} alt="pruduto" style={contentStyle} />
        </Container>
        <Container>
          <img src={produto} alt="pruduto" style={contentStyle} />
        </Container>
        <Container>
          <img src={roupas} alt="pruduto" style={contentStyle} />
        </Container>
      </Carousel>
    </div>
  );
};

export default CarouselShop;
