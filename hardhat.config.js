require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.19",
  networks: {
    TaikoHeklaL2: {
      url: process.env.RPC_URL,
      chainId: 167009,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  // sourcify: {
  //   enabled: false
  // },
  // etherscan: {
  //   apiKey: "",
  //   customChains: [
  //     {
  //       network: "TaikoHeklaL2",
  //       chainId: 167009,
  //       urls: {
  //         apiURL: "https://optimism-sepolia.blockscout.com/api",
  //         browserURL: "https://optimism-sepolia.blockscout.com/",
  //       }
  //     }
  //   ]
  // }  
};