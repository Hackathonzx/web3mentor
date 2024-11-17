import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#4f46e5', marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Classroom
        </Typography>
        <Button color="inherit">Connect wallet</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
