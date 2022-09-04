# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Folders/Files layout explanation :

- Utils folder: before (in the last fund-me project) we had our verify code right in our deploy code. Here, instead of having our verify code in our deploy scripts, we're actually going to create a folder called utils, which stands for utilities. And this is where we're going to add different scripts that we can
  use across different deployments. Because let's say we have 50 Deploy scripts, we're not going to make 50 Deploy functions, we're just going to add them to our utils folder.

- Helper.config.js : it allows us to write less code, because the code in this file is export and use by 2 other files. So if we didn't have this file we would have two times this part of code
