import React, { ReactNode } from "react";
import { Header } from "../presentational/header/Header";
import Footer from "../layouts/footer/footer";
import { ModalProvider } from "context/modal_container";
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
