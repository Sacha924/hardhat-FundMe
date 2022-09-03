// we want to separate this file from the rest of our file so that we know okay, this isn't part of our project, but it is part of our testing.
//SPDX-License-Idenfifier: MIT
pragma solidity ^0.6.0;


import "@chainlink/contracts/src/v0.6/tests/MockV3Aggregator.sol";
// If we just import the code like this, remember, this is exactly the same as copy pasting this contract :https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/tests/MockV3Aggregator.sol  into our project