# DApp Academy

This course aims to guide you through the complete development of a decentralized application, from start to finish. We will start by building the Solidity smart contracts, testing and deploying with Truffle. Next we will move into JavaScript, communicating with our smart contracts with Web3 and generating our user interface using ReactJS. Finally we will wrap up by serving our front end through an IPFS node behind a custom domain name.

> A complete end-to-end course on decentralized application development.

We've chosen to create a decentralized resume because it's both achievable by everyone, demonstrates full stack knowledge of blockchain application development, and is tangible to your blockchain careers. After all, what better resume can a blockchain developer have than a decentralized one?

All though it's not required, it's expected you're familiar programming Solidity smart contracts, and have a basic understanding of programming fundamentals, preferably with JavaScript before starting this course.

## 1. Getting Started

Let's get started by setting up our project structure and initializing our repository.

### 1.1 Bootstrapping with create-react-app

```
npm install -g create-react-app
```

Because we installed this globally, you'll now have `create-react-app` available from the command line in any project.

```
create-react-app YOUR_PROJECTS_NAME
```

This will create a folder with our project name and bootstrap the basic ReactJS project and folder structure.

### 1.2 Expanding our project structure

We will be adding folders to complete our project, by the end our structure should look like;

```
| assets
| contracts
| migrations
| tests
| src
  | components
  | models
  | store
    | data-name
  | views
    | index.js
  | index.jsx
| package.json
| truffle-config.js
```

### 1.3 Installing Truffle and Ganache

```
npm install -g truffle
```

We also need a local instance of the Ethereum blockchain to develop and test our smart contracts on. We've chosen [Ganache](https://www.trufflesuite.com/ganache) as our Ethereum client, partly because it's made by Truffle, therefore it works nicely, but mainly because it has a built in block explorer and transaction log to visualize our interactions.

- Installing ReactJS
- Adding our dependencies

## 2. Solidity Smart Contract

### 2.1 Test driven development

We're going to be practicing test driven development **(TDD)** throughout this course. This is a common development method you'll encounter on many projects, and a good skill to learn. Test driven development involves writing a series of expectations as tests, then implementing the code to pass those tests.

### 2.2 Meeting expectations

Programming the smart contract with Solidity

#### 2.2.1 Defining the contract

```cpp
pragma solidity >=0.4.0 <0.7.0;
```

#### 2.2.2 Defining the contract

```
contract Resume {}
```

This `contract` definition wraps all the functionality of the contract itself. You can think of it like a class in other programming languages. We deploy an instance of our `contract` class which maintains state and exposes functionality to manage that state. Let's define some `State Variables` inside our `Resume` to look see how this works.

```cpp
contract Resume {

  address private owner;
  string name;
  string position;
}
```

#### 2.2.3 Managing state with Functions

We've defined our state, but how can we read and write to it? That's where functions come in. Functions provide the dynamic aspect to our smart contract. For now, we will be using functions to manage our state variables, but later you'll see how we can use them for all kinds of data manipulation and calculations.

> From now on, all code snippets will be assume their contained within our `contract Resume {}` definition.

```javascript
function updateDetails(string newName) public payable whenUniqueOccupation() {
  self.name = name;
}
```

#### 2.2.3 Data

When writing a contract, authors have a choice of what kind of data to use: memory is cheap, ie it costs relatively low gas, but the data are volatile and lost after a function finishes executing; storage is the most expensive, and is absolutely needed for contract state, which must persist from function call to function call; there is also a calldata location, that corresponds to the values in the stack frame of a function that is executing. This is the cheapest location to use, but it has a limited size. In particular, that means that functions may be limited in their number of arguments.

#### 2.2.2 Configuring truffle

We'll be configuring two environments, one to `test` and one for `development`. You might ask, whats the difference? Surely testing is development too right? Well the purpose of the `development` environment is to replicate our production environment. It should wait for finality, allow us to transact without spending real ether, and also without worry that we will perform breaking changes. Therefor we will be using `development` to connect our ReactJS front end, while our test network will be used solely for

```javascript
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
  },
}
```

### 2.3 Deploying the smart contract

## 3 Communication with Web3

Wrapping our smart contract interface in simple, easy to use communication tools.

### 3.1 Loading our contract ABI

### 3.2 Getting data from our contract

#### 3.2.1 Constructor

#### 3.2.2 Variable inspection

### 3.3 Writing to our contract

## 4. ReactJS Front End

### 4.0 Styling

I've included a completed stylesheet you can use to quickly style your resume. Your resume should end up looking like the final example if you follow the `className` structure used through out this course. To attach the provided stylesheet, copy the `index.css` file into your `./public` directory, and add the following lines to your `./public/index.html` file, within the `<head></head>` tags

```
<link href="https://fonts.googleapis.com/css?family=Open Sans:100,200,300,400,500,600" rel="stylesheet">
<link href="index.css" rel="stylesheet">
```

We're using a global css file, included at the root of our project. This is the simplest for those transitioning from regular HTML with CSS into the world of React. Our JSX elements simple take a `className` string which translates to a `class` in the rendered HTML elements.

### 4.1 Building our components

### 4.2 Building our navigation

### 4.3 Implementing our Web3

### 4.4 Building our package

## 5. Redux data management

## 6. Hosting with IPFS

### 6.1 Creating an IPFS server

### 6.2 Publishing our project

### 6.3 Exposing our content

### 6.4 DNS mapping to IPFS resource hash