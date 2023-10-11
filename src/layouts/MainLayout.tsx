import React, { ReactNode } from 'react';
import { Header } from "../components/presentational/header/Header";
import Container from '@mui/material/Container';
import Footer  from "../components/presentational/footer/footer";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer/>
    </div>
  );
}

export { MainLayout };
