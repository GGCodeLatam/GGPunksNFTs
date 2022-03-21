
const hre = require("hardhat");

async function main() {

  const GGPunksNFT = await hre.ethers.getContractFactory("GGPunksNFT");
  const ggPunksNFT = await GGPunksNFT.deploy();

  await ggPunksNFT.deployed();

  console.log("GGPunksNFT deployed to:", ggPunksNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
