require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT

console.log(process.env.PRIVATE_KEY_FOR_FIJI);

const AVALANCHE_TEST_PRIVATE_KEY = process.env.PRIVATE_KEY_FOR_FIJI;
const AVALANCHE_MAIN_PRIVATE_KEY = "PRIVATE_KEY_FOR_MAINNET";

module.exports = {
  solidity: "0.8.19",
  networks: {
    avalancheTest: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`],
    },
  },
};
