import PropTypes from "prop-types";
import { Modal } from "@mui/material";
import React from "react";
import { ModalItemsContainer } from "./Styles";

const ModalWrapper = ({ open, toggleModal, children }) => {
  return (
    <Modal
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      open={open}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalItemsContainer>{children}</ModalItemsContainer>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.node,
};

export default ModalWrapper;
