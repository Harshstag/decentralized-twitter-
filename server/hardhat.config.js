
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();


  const address = await accounts.getAddress();
  console.log(`Contract Address: ${address}`);
  // }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xxxxxxxxxxxxxxxxxx",
      accounts: [
        "7eeexxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
    },
  },
};
