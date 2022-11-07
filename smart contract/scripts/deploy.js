const hre = require("hardhat");

const main = async () => {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const marketContract = await NFTMarket.deploy();
  await marketContract.deployed();

  console.log("NFT Market deployed to:", marketContract.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nftContract = await NFT.deploy(marketContract.address);
  await nftContract.deployed();

  console.log("NFT deployed to:", nftContract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
