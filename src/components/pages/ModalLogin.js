import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import ModalPrincipal from "../../components/molecules/ModalPrincipal";
import { GlobalContext } from "../Hooks/GlobalContext";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const ModalLogin = () => {
  const global = React.useContext(GlobalContext);
  const setModal = global.setModal;
  const modal = global.modal;

  const onFinish = (values) => {
    console.log("Success:", values);
    setModal(!modal);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ModalPrincipal>
      <div style={{ marginTop: "50px" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[
              {
                required: true,
                message: "Adicione seu Usuário!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[
              {
                required: true,
                message: "Adicione sua Senha!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Salvar login</Checkbox>
          </Form.Item>
          <div>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
              >
                Entrar
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ModalPrincipal>
  );
};
export default ModalLogin;
