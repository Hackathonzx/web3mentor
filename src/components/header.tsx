import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Web3Provider } from '@ethersproject/providers';

declare global {
  interface Window {
    ethereum: {
      request: (args: { method: string }) => Promise<never>;
    };
  }
}

const Header = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log('Wallet connected:', await signer.getAddress());
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('MetaMask not installed');
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4f46e5', marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Classroom
        </Typography>
        <Button color="inherit" onClick={connectWallet}>Connect wallet</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
