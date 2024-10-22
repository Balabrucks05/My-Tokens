require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
const {RPC_URL,PRIVATE_KEY,ETHERSCAN_API_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "Token_holesky",
  networks: {
    hardhat: {},
    testnet:{
      url: RPC_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    },
    Token_holesky:{
      url: RPC_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    } 
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: {
      holesky: ETHERSCAN_API_KEY
    },
  }
 };
