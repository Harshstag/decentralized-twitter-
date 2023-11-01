// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/XvKLOjFrXzN9yYI3A4O-3Af2rY8dpMLM",
//       accounts: [
//         "7eeeb535a6afec56c834dfefa069bce852dfda4e4e72340e36a63d9dcd8bc17f",
//       ],
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // for (const account of accounts) {
  // console.log(account.address);

  const address = await accounts.getAddress();
  console.log(`Contract Address: ${address}`);
  // }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/XvKLOjFrXzN9yYI3A4O-3Af2rY8dpMLM",
      accounts: [
        "7eeeb535a6afec56c834dfefa069bce852dfda4e4e72340e36a63d9dcd8bc17f",
      ],
    },
  },
};

// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");
// const fs = require("fs");
// // const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/XvKLOjFrXzN9yYI3A4O-3Af2rY8dpMLM",
//       accounts: [
//         "7eeeb535a6afec56c834dfefa069bce852dfda4e4e72340e36a63d9dcd8bc17f",
//       ],
//     },
//   },
//   solidity: {
//     version: "0.8.19",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };
