require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind attitude grace industry food skin'; 
let testAccounts = [
"0x1794034ca5d46fbd11e97b49324bcd81318b1c5f594f6e0bc34a566253b8fad9",
"0xf7d47750411fff7689769045f104f0875dcdfb92856fdbc314638c106fb3a4ed",
"0x5d9af117c5e9b27b3c8a5d312159dd0cdc4d3be3da314cbb2cfc2907a6b19b2a",
"0x733a06226dd8cda96d89bc2a841711c14dc1494e9ae29f1531f071b6ff19bcbc",
"0x683a5020b419fd41784149a49411205ece4268f45b7fefb12291795273eb8504",
"0xcbe23ed55656552002d54cfec3cfb102ff806fb3bc161bf42d6436e2cab37743",
"0xb34e1a5f9728967e91d30d6f3912ad438bfe05ae4009ded3dab4d5e783e4fe86",
"0x9e477eeda45c10c6cf4be95e4b4ccd342d47ff174f08f11d2f7512b8d8d5687a",
"0x5a7c480a9fafd5338fc7ecba11ee3c0cfdc94f333cbd149bc2a727ee9bfe3acc",
"0xfb332d5f423a8a6a2a0883ccf84a88c2db240e3a06003ebf51130d1666b0633a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
