import OnboardingModal from '../components/presentational/model/onboarding_call';
import React, { createContext, useState } from 'react';

interface ModalContextProps {
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("open")
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <OnboardingModal handleClose={closeModal} open={isOpen}  />}
    </ModalContext.Provider>
  );
};