import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface OnboardingModalProps {
  open: boolean;
  handleClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: 400 }}>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Box>
    </Modal>
  );
};

export default OnboardingModal;
