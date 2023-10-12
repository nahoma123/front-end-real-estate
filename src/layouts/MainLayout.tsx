import React, { ReactNode } from "react";
import { Header } from "../components/presentational/header/Header";
import Container from "@mui/material/Container";
import Footer from "../components/presentational/footer/footer";
import { ModalProvider } from "context/modal_container";
import { styled } from "@mui/material/styles";

type MainLayoutProps = {
  children: ReactNode;
};
const ContentContainer = styled(Container)({
  marginTop: '64px', // Adjust this value to match the height of your AppBar
});

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <ModalProvider>
        <Header />
        
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </ModalProvider>
    </div>
  );
}

export { MainLayout };
