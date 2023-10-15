import React, { ReactNode } from "react";
import { Header } from "../components/presentational/header/Header";
import Container from "@mui/material/Container";
import Footer from "../components/presentational/footer/footer";
import { ModalProvider } from "context/modal_container";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

type MainLayoutProps = {
  children: ReactNode;
};
// const StyledBox = styled(Container)({
//   marginTop: "64px", // Adjust this value to match the height of your AppBar
// });

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <ModalProvider>
        <Header />
        <Box sx={{ marginTop: "64px" }}>{children}</Box>
        <Footer />
      </ModalProvider>
    </div>
  );
}

export { MainLayout };
