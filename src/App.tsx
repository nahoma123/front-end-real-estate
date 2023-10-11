import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from "./layouts/MainLayout";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

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
      main: '#948c1e', 
    },
    secondary: {
      main: '#ff8800', 
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Set your custom font family
    // ... other typography options
  },
  // ... other theme options
}); // Create your theme instance

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
    </ThemeProvider>
  );
}

export default App;
