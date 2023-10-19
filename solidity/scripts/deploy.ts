import { ethers } from "hardhat";

async function main() {
  //Asset Token
  const assetFactory = await ethers.getContractFactory(
    "AssetToken"
  );
  const assetContract = await assetFactory.deploy();

  await assetContract.waitForDeployment();
  console.log("Asset Token Contract deployed to:", assetContract.target);

  //Asset Token Factory
  const assetTokenFactoryFactory = await ethers.getContractFactory(
    "AssetTokenFactory"
  );
  const assetTokenFactoryContract = await assetTokenFactoryFactory.deploy();

  await assetTokenFactoryContract.waitForDeployment();
  console.log("Token Factory Contract deployed to:", assetTokenFactoryContract.target);
  
  // //Platform Entry Point
  // const platformEntryPointFactory = await ethers.getContractFactory(
  //   "platformEntryPoint"
  // );
  // const platformEntryPointContract = await platformEntryPointFactory.deploy();

  // await platformEntryPointContract.deployed();
  // console.log("Contract deployed to:", platformEntryPointContract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
