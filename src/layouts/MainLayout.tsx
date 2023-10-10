import React, { ReactNode } from 'react';
import { Header } from "../components/presentational/header/Header";
import Container from '@mui/material/Container';

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
}

export { MainLayout };
