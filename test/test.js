const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Incentive-Based Onboarding Portal", function () {
  let soulboundToken, rewardToken, mentorship, daoVoting;
  let owner, addr1, addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy SoulboundToken
    const SoulboundToken = await ethers.getContractFactory("SoulboundToken");
    soulboundToken = await SoulboundToken.deploy();
    await soulboundToken.waitForDeployment();

    // Deploy RewardToken
    const RewardToken = await ethers.getContractFactory("RewardToken");
    rewardToken = await RewardToken.deploy();
    await rewardToken.waitForDeployment();

    // Deploy Mentorship
    const Mentorship = await ethers.getContractFactory("Mentorship");
    mentorship = await Mentorship.deploy();
    await mentorship.waitForDeployment();

    // Deploy DAOVoting
    const MIN_SBT_FOR_PROPOSAL = 1;
    const DAOVoting = await ethers.getContractFactory("DAOVoting");
    daoVoting = await DAOVoting.deploy(soulboundToken.target, MIN_SBT_FOR_PROPOSAL);
    await daoVoting.waitForDeployment();
  });

  it("should mint a soulbound token", async function () {
    await soulboundToken.mintSBT(addr1.address, "ipfs://example-metadata");
    expect(await soulboundToken.balanceOf(addr1.address)).to.equal(1);

    // SBT is non-transferable
    await expect(
      soulboundToken
        .connect(addr1)
        .transferFrom(addr1.address, addr2.address, 0)
    ).to.be.revertedWith("SBTs are non-transferable");
  });

  it("should reward tokens", async function () {
    const initialBalance = await rewardToken.balanceOf(addr1.address);
    await rewardToken.reward(addr1.address, ethers.parseEther("50"));
    const finalBalance = await rewardToken.balanceOf(addr1.address);
    expect(BigInt(finalBalance) - BigInt(initialBalance)).to.equal(
      BigInt(ethers.parseEther("50"))
    );
  });

  it("should start and complete a mentorship", async function () {
    await mentorship.startMentorship(owner.address, addr1.address);
    const mentorshipData = await mentorship.getMentorshipData(0);

    expect(mentorshipData.mentor).to.equal(owner.address);
    expect(mentorshipData.mentee).to.equal(addr1.address);
    expect(mentorshipData.completed).to.equal(false);

    await mentorship.completeMentorship(0);
    const updatedMentorshipData = await mentorship.getMentorshipData(0);
    expect(updatedMentorshipData.completed).to.equal(true);
  });

  it("should handle DAO proposals and voting", async function () {
    await daoVoting.createProposal("Add new course content", "Details about the course", 3600); // 1-hour duration
    const proposal = await daoVoting.proposals(0);
    expect(proposal.description).to.equal("Details about the course");

    await daoVoting.vote(0, true, 1); // Pass token ID for voting
    const updatedProposal = await daoVoting.proposals(0);
    expect(updatedProposal.votesFor).to.equal(1);

    await daoVoting.executeProposal(0);
    const executedProposal = await daoVoting.proposals(0);
    expect(executedProposal.executed).to.equal(true);
  });
});
