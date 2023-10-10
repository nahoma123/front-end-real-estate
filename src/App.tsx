import React from 'react';
import { BrowserRouter as Router,  Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Home, About } from './pages';
import logo from './logo.svg';
import 'tailwindcss/tailwind.css';

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

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className="bg-blue-500">
          <Toolbar>
            <img src={logo} alt="logo" className="h-2 w-2 mr-2" />
            <Typography variant="h6" className="flex-grow">
              My App
            </Typography>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Button component={Link} to="/" color="inherit">
                    Home
                  </Button>
                </li>
                <li>
                  <Button component={Link} to="/about" color="inherit">
                    About
                  </Button>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
