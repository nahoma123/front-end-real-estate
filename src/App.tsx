import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./pages/landing/landing";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from "./layouts/MainLayout";
import { ModalProvider } from "context/modal_container";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Welcome to the about page!</p>
    </div>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#948c1e",
    },
    secondary: {
      main: "#ff8800",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif", // Set your custom font family
    // ... other typography options
  },
  // ... other theme options
}); // Create your theme instance

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <MainLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={LandingPage} />
              <Route path="/about" Component={About} />
            </Routes>
          </BrowserRouter>
        </MainLayout>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
