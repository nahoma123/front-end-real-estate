import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <BrowserRouter>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        </BrowserRouter>
        {/* Add other navigation links */}
      </Toolbar>
    </AppBar>
  );
}

export { Header };
