import React from "react";
import ModalPrincipal from "../../components/molecules/ModalPrincipal";

import "antd/dist/antd.css";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ModalRegister = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="55">+55</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <ModalPrincipal>
      <div style={{ marginTop: "10px", marginRight: "100px" }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "55",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "E-mail Inválido !",
              },
              {
                required: true,
                message: "E-mail Obrigatotio !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Senha"
            rules={[
              {
                required: true,
                message: " Senha Obrigatoria!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirmar senha"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Confirme sua senha!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(" Ops ! Senhas não são iguais");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="Primeiro Nome"
            label={
              <span>
                Nome&nbsp;
                <Tooltip title="Qual seu Primeiro Nome?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Nome Obrigatorio",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Telefone"
            rules={[
              {
                required: true,
                message: "Numero Obrigatorio",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="Termos"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Aceito os Termos"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Eu li os <a href="/terms">Termos</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              style={{ marginLeft: "200px" }}
              type="primary"
              htmlType="submit"
            >
              Cadastro
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ModalPrincipal>
  );
};
export default ModalRegister;
