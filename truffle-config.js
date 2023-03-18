const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

const mnemonic = "8f8d64e7754dff2d49a0eacaf4fefce31bc6845124b4e7a5a8dcb9c398a172a0"
// const key="GRKYAGR1EHBBC2V9R4R7ZN15C34N6RMG5Y" -bsc testnet
const key="e4c6b2743e544bdb910ef53155687b0f"
const keyETH='N2DMMNDUN27W4CA99IGEHXE1AS4UI7ANNT'
module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    // bscscan: key
    goerli_etherscan: keyETH,
    // goerli:key
  },
  goerli_etherscan: {
    // bscscan: key
    // goerli:key

    goerli_etherscan: key
  },
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    testnetETH: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/e4c6b2743e544bdb910ef53155687b0f`),
      network_id: 5,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.19", // A version or constraint - Ex. "^0.5.0"
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  }
}