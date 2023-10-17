import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./pages/landing/landing";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from "./components/layouts/MainLayout";
import { SecondaryLayout } from "./components/layouts/SecondaryLayout";
import { BookValuation } from "./pages/book_valuation/book_valuation";
import { BookValuationRegistration } from "./pages/book_valuation/book_valuation_register";

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

function Contained({ children }: { children: JSX.Element }): JSX.Element {
  return <Container>{children}</Container>;
}

function UnContained({ children }: { children: JSX.Element }): JSX.Element {
  return <Box>{children}</Box>;
}

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <UnContained>
                  <LandingPage />
                </UnContained>
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <Contained>
                <About />
              </Contained>
            }
          />
          <Route
            path="/book_valuation"
            element={
              <SecondaryLayout>
                <BookValuation />
              </SecondaryLayout>
            }
          />
          <Route
            path="/book_valuation_registration"
            element={
              <SecondaryLayout>
                <BookValuationRegistration />
              </SecondaryLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
