import { React, createContext, useContext, useState } from "react";

const ModalContext = createContext({
  showModal: false,
  info: { edit: false },
  toggleModal: () => {},
});

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  });
  const [modalPayload, setModalPayload] = useState({
    action: "default",
    id: null,
  });

  const toggleModal = (
    modalName,
    payload = { action: "default", id: null }
  ) => {
    if (payload) {
      setModalPayload(payload);
    }
    setShowModal((prevShowModalState) => ({
      ...prevShowModalState,
      [modalName]: !prevShowModalState[modalName],
    }));
  };

  const toggleAction = (payload) => {
    setModalPayload(payload);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, toggleModal, toggleAction, modalPayload }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modalCtx = useContext(ModalContext);
  if (modalCtx === undefined) {
    throw new Error("useModal must be used inside  a Modal Provider");
  }
  return modalCtx;
};

export default ModalProvider;
