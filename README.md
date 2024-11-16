# Gamified Web3 Onboarding Platform

SoulPortal is an incentive-based learning portal designed to onboard users into the world of Web3 through gamified quests, mentorship programs, and decentralized governance. Leveraging Soulbound Tokens (SBTs) as immutable proof of achievement, SoulPortal rewards users for learning, engaging, and contributing to the community.

# Table of Contents
1. Features
2. Smart Contracts
3. Getting Started
4. Installation
5. Deployment
6. Testing
7. Usage
8. Future Enhancements
9. License

# 1. Features
1. Gamified Learning Paths
- Users embark on structured “quests” to learn Web3 basics like DAOs, NFTs, and decentralized identity.
- Progress is tracked via an intuitive dashboard.
2. Mentorship Program
- Users are paired with mentors who assist them in completing learning paths.
- Mentors earn fungible tokens and SBTs for guiding learners.
3. Soulbound Tokens (SBTs)
- Immutable Achievements: Represent learning milestones and contributions.
- Reputation System: SBTs build user credibility and trust.
- Governance Integration: Reputation-weighted voting power in DAO proposals.
4. Token Rewards System
- ERC-20 tokens are distributed for completing tasks and engaging in mentorship programs.
- Tokens unlock advanced quests and community initiatives.
5. DAO Governance
Holders of specific SBTs gain voting privileges to propose and vote on platform features, learning paths, or initiatives.
6. Achievement Dashboard
A user-friendly interface displays progress, token balances, and SBT achievements.

# 2. Smart Contracts
The project consists of the following smart contracts:

1. SoulboundToken.sol
Manages the minting and tracking of non-transferable tokens as proof of achievement.

2. TokenReward.sol
Handles the minting and distribution of ERC-20 tokens as user rewards.

3. DAOVoting.sol
Implements governance mechanisms, including dynamic privileges for SBT holders and weighted voting.

4. MentorshipReward.sol
Facilitates mentor matching and rewards distribution.

# 3. Getting Started

Follow these steps to deploy and interact with the platform:

- Clone this repository:

git clone https://github.com/your-repo/soulportal.git

cd soulportal

# 4. Installation

- Install dependencies:

npm install

- Configure environment variables:

Create a .env file in the root directory.

Add your RPC URL, private keys, and other required parameters.

# 5. Deployment

- Compile the contracts:

npx hardhat compile

- Deploy the contracts:

npx hardhat run ignition/modules/deploy.js --network TaikoHeklaL2

Here is the deployed contract addresses: 

- SoulboundToken deployed to: 0x2479eb1a719799D2956bB80551d9FA1aF46b0560
- RewardToken deployed to: 0x7EED6B6954bC123BE335b3b2539bCD81E044D526
- Mentorship deployed to: 0xe9dE092AAfEEF452EA20f84816D96598cD5023c2
- DAOVoting contract deployed at: 0xb893DAA7F210bE7190e77249ca30281C8c0508DE

Verify deployments on Etherscan (optional):

npx hardhat verify --network <network> <contract-address>


# 6. Testing
Run automated tests:

npx hardhat test

test coverage:

- Ensure users with insufficient SBTs cannot create proposals.
- Verify correct token distribution for completed quests.
- Test weighted voting based on SBT holdings.
- should mint a soulbound token
- should reward tokens
- should start and complete a mentorship (38ms)
- should handle DAO proposals and voting

Testing files:

Located in the test/ directory.

# 7. Usage
- Mint SBTs: Use the SoulboundToken contract to mint SBTs for user achievements.
- Create Quests: Interact with the QuestManager to set up quests for users.
- Participate in Governance: Use the DAOVoting contract for creating and voting on proposals.
- Reward Distribution: Call TokenReward and MentorshipReward contracts to distribute tokens for completing tasks or mentoring.

# 8. Future Enhancements
- Advanced Leaderboards: Recognize top learners and mentors with exclusive rewards.
- Cross-Community Recognition: Collaborate with other DAOs to make SBTs universal credentials.
- AI-Driven Learning Paths: Implement adaptive learning algorithms to tailor quests to individual progress.
- On-Chain Analytics Dashboard: Provide insights into user engagement and governance contributions.
- Scalability: Explore Layer 2 solutions like Polygon or zk-rollups for enhanced performance.

# 9. License

This project is licensed under the MIT License.

# 10. Contributing

We welcome contributions from the community! Please open a pull request or issue for any suggestions or improvements.