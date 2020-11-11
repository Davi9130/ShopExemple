import React from "react";
import { Typography, Divider } from "antd";

const Sobre = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  return (
    <div style={{ marginBottom: "43rem" }}>
      <Typography>
        <Title>Titulo</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt
          harum, in molestiae hic dolore laboriosam culpa quia ullam sint soluta
          libero ipsum eius similique, praesentium, iure veniam perspiciatis?
          Laboriosam.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt
          harum, in molestiae hic dolore laboriosam culpa quia ullam sint soluta
          libero ipsum eius similique, praesentium, iure veniam perspiciatis?
          Laboriosam.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Sobre;
