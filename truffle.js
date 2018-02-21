require('dotenv').config();
const Web3 = require("web3")
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require("ethereumjs-wallet");

var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex");
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");

var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex");
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 4600000,
      gasPrice: web3.utils.toWei("20", "gwei"),
      network_id: "3",
    },
    mainnet: {
      provider: mainNetProvider,
      gas: 4600000,
      gasPrice: web3.utils.toWei("20", "gwei"),
      network_id: "1",
    }
  }
};
