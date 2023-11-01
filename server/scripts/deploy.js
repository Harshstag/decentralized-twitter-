const main = async () => {
  // const contractFactory = await ethers.getContractFactory("TwitterContract");
  // const contract = await contractFactory.deploy();
  // await contract.deployed();

  // console.log("Contract deployed to: ", await contract.getAddress());

  const deployedContract = await hre.ethers.deployContract("TwitterContract");
  await deployedContract.waitForDeployment();
  console.log("SimpleStorage Contract Address:", deployedContract.target);
};
//Contract Address: 0x5F83eF1f3A21Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// url : https://mumbai.polygonscan.com/address/0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const runMain = async () => {
  try {x
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
