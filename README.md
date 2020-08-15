# DApp Academy

This course aims to guide you through the complete development of a decentralized application, from start to finish. We will start by building the Solidity smart contracts, testing and deploying with Truffle. Next we will move into JavaScript, communicating with our smart contracts with Web3 and generating our user interface using ReactJS. Finally we will wrap up by serving our front end through an IPFS node behind a custom domain name.

> A complete end-to-end course on decentralized application development.

## Requirements

## Installation

Please ensure you have all the required dependencies installed before running the smart contracts and/or React user interface;

```
yarn install
```

## Testing

The Resume smart contract includes a collection of unit tests which can be found in the `./test` directory. To run these unit tests, simply execute `yarn test:contract` in your terminal. Truffle will throw a connection error if it can't connect to a blockchain network. If you'd like to start a local instance, simply run `yarn start:chain`. A local Ethereum instance will start using the `development` network configuration found in `./truffle-config.js`. Now you can execute `test` within the same terminal to run unit tests, or open a new terminal and execute `yarn test:contract`.
