// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface ISoulboundToken {
    function balanceOf(address account, uint256 tokenId) external view returns (uint256);
}

contract DAOVoting {
    // Data structure for proposals
    struct Proposal {
        uint256 id;
        string title;
        string description;
        address creator;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 createdAt;
        uint256 endAt;
        bool executed;
    }

    // Mapping to store proposals
    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;

    // SBT Contract Address
    ISoulboundToken public soulboundToken;

    // SBT Privilege Configuration
    uint256 public minSBTForProposal; // Minimum SBT ID required to create a proposal
    mapping(uint256 => uint256) public sbtVotingWeight; // SBT ID to voting weight

    // Event declarations
    event ProposalCreated(
        uint256 indexed proposalId,
        address indexed creator,
        string title,
        string description,
        uint256 endAt
    );
    event Voted(uint256 indexed proposalId, address indexed voter, bool voteFor, uint256 weight);
    event ProposalExecuted(uint256 indexed proposalId, bool success);

    constructor(address sbtAddress, uint256 _minSBTForProposal) {
        soulboundToken = ISoulboundToken(sbtAddress);
        minSBTForProposal = _minSBTForProposal;
    }

    // Modifier to check if the user holds enough SBTs
    modifier onlyQualifiedSBT(uint256 tokenId) {
        require(soulboundToken.balanceOf(msg.sender, tokenId) > 0, "Not qualified to propose or vote");
        _;
    }

    // Function to create a proposal
    function createProposal(
        string calldata title,
        string calldata description,
        uint256 duration
    ) external onlyQualifiedSBT(minSBTForProposal) {
        require(duration > 0, "Invalid duration");

        uint256 proposalId = proposalCount++;
        proposals[proposalId] = Proposal({
            id: proposalId,
            title: title,
            description: description,
            creator: msg.sender,
            votesFor: 0,
            votesAgainst: 0,
            createdAt: block.timestamp,
            endAt: block.timestamp + duration,
            executed: false
        });

        emit ProposalCreated(proposalId, msg.sender, title, description, block.timestamp + duration);
    }

    // Function to vote on a proposal
    function vote(uint256 proposalId, bool voteFor, uint256 sbtTokenId) external onlyQualifiedSBT(sbtTokenId) {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp < proposal.endAt, "Voting period ended");
        require(!proposal.executed, "Proposal already executed");

        uint256 weight = sbtVotingWeight[sbtTokenId];
        require(weight > 0, "No voting weight assigned for this SBT");

        if (voteFor) {
            proposal.votesFor += weight;
        } else {
            proposal.votesAgainst += weight;
        }

        emit Voted(proposalId, msg.sender, voteFor, weight);
    }

    // Function to execute a proposal
    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.endAt, "Voting period not ended");
        require(!proposal.executed, "Proposal already executed");

        proposal.executed = true;
        bool passed = proposal.votesFor > proposal.votesAgainst;

        emit ProposalExecuted(proposalId, passed);
    }

    // Function to update SBT privileges (only admin)
    function setSBTPrivileges(uint256 sbtId, uint256 votingWeight) external {
        // Only admin can call this, implement ownable/admin logic as needed
        sbtVotingWeight[sbtId] = votingWeight;
    }
}
