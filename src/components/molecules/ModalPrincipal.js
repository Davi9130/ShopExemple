import React from "react";
import { Modal } from "antd";
import { GlobalContext } from "../Hooks/GlobalContext";

const ModalPrincipal = ({ children }) => {
  const global = React.useContext(GlobalContext);
  const setModal = global.setModal;
  const modal = global.modal;

  const modalRegister = global.modalRegister;
  const setModalRegister = global.setModalRegister;

  const loading = global.loading;
  const setLoading = global.setLoading;

  const ocultarModal = () => {
    if (modal === true) {
      setModal(!modal);
      setLoading(!loading);
    } else {
      setModalRegister(!modalRegister);
      setLoading(!loading);
    }
  };
  return (
    <>
      <Modal
        visible={modal || modalRegister}
        onCancel={ocultarModal}
        width={600}
        title="Entre e Aproveite Nossa Loja Virtual ✔"
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalPrincipal;
