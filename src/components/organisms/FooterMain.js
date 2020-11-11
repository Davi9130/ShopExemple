import { Footer } from "antd/lib/layout/layout";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const FooterMain = () => {
  return (
    <Footer
      style={{ textAlign: "center", backgroundColor: "black", color: "white" }}
    >
      Web Shop ©2020 Created by Davi
      <div style={{ float: "right" }}>
        <a href="/facece">
          <FacebookOutlined style={{ fontSize: "35px", margin: "5px" }} />
        </a>

        <a href="/insta">
          <InstagramOutlined style={{ fontSize: "35px", margin: "5px" }} />
        </a>

        <a href="/yt">
          <YoutubeOutlined style={{ fontSize: "35px", margin: "5px" }} />
        </a>
      </div>
    </Footer>
  );
};

export default FooterMain;
