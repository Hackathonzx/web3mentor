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
};