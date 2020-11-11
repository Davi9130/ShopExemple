import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const [modalRegister, setModalRegister] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        modalRegister,
        setModalRegister,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
