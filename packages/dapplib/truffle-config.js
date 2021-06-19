require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stool deny screen proud gentle light army gather'; 
let testAccounts = [
"0x30eeb57a06cc4a745faa86fffc19b5bf5cd8e315f88c31223369c4482496321d",
"0xea194b20e721e6b6ff8e153e77a1ef461e1fb55ccccaef49bc988fb4c117791f",
"0x3b6bbdc4c6d1042254dd0e3ceb4e8cede26e2407df3824b3171978ec6629071d",
"0x7926bb3802aa1a1838f07d8c432aafbde8a509f62923022351cb29a488667fdf",
"0xba7abca29ecadc4a579f67a72d7886aed64f208fb21c8380be3b1c83a67030b0",
"0x7c067a628b993c79718cd52b3056d25ec7fa519ad886582c6df2c189d594966c",
"0x3b0901f3901553a9e14c7ea25556b2c15dd1ab14861bab8c7e9a989532018d5f",
"0x2683f1fd4c439874f7065aeb9abd07d35a9e9ffc6a96ac2b8d1edc38b35c3c1f",
"0x1012e39e81b92dc2d93f879af7b4e91b9a670874a9222afced567d0642da3caa",
"0xaa01a83283a6078b12f1e24d4a721943f5bd0c3fdc9f4c3020367caea743e1e1"
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
            version: '^0.8.0'
        }
    }
};

