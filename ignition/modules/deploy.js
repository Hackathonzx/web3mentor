const hre = require("hardhat");

async function main() {
  // Deploy SoulboundToken contract
  const SoulboundToken = await hre.ethers.getContractFactory("SoulboundToken");
  const soulboundToken = await SoulboundToken.deploy();
  await soulboundToken.waitForDeployment();
  console.log("SoulboundToken deployed to:", await soulboundToken.getAddress());

  // Deploy RewardToken contract
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const rewardToken = await RewardToken.deploy();
  await rewardToken.waitForDeployment();
  console.log("RewardToken deployed to:", await rewardToken.getAddress());

  // Deploy Mentorship contract
  const Mentorship = await hre.ethers.getContractFactory("Mentorship");
  const mentorship = await Mentorship.deploy();
  await mentorship.waitForDeployment();
  console.log("Mentorship deployed to:", await mentorship.getAddress());

  // Deploy DAOVoting contract

   // Parameters for deployment
  const SBT_CONTRACT_ADDRESS = "0x2479eb1a719799D2956bB80551d9FA1aF46b0560"; // Replace with your SBT contract address
  const MIN_SBT_FOR_PROPOSAL = 1; // Minimum SBT ID required to create proposals

  // Get the contract factory
  const DAOVoting = await ethers.getContractFactory("DAOVoting");

  // Deploy the contract
  const daoVoting = await DAOVoting.deploy(SBT_CONTRACT_ADDRESS, MIN_SBT_FOR_PROPOSAL);

  // Wait for deployment to complete
  await daoVoting.waitForDeployment();

  console.log("DAOVoting contract deployed at:", await daoVoting.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
