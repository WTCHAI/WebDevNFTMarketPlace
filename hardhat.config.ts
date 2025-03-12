import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ethers";

import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    enabled: true,
  },
  networks: {
    hardhat: {
      allowBlocksWithSameTimestamp: true,
    },
  },
};

export default config;
