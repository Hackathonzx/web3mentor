// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Mentorship is Ownable {
    struct MentorshipData {
        address mentor;
        address mentee;
        uint256 timestamp;
        bool completed;
    }

    uint256 public nextMentorshipId;
    mapping(uint256 => MentorshipData) public mentorships;
    mapping(address => uint256) public mentorRewards;

    event MentorshipStarted(uint256 mentorshipId, address indexed mentor, address indexed mentee);
    event MentorshipCompleted(uint256 mentorshipId, address indexed mentor, address indexed mentee);

    function startMentorship(address mentor, address mentee) external onlyOwner {
        uint256 mentorshipId = nextMentorshipId++;
        mentorships[mentorshipId] = MentorshipData({
            mentor: mentor,
            mentee: mentee,
            timestamp: block.timestamp,
            completed: false
        });

        emit MentorshipStarted(mentorshipId, mentor, mentee);
    }

    function completeMentorship(uint256 mentorshipId) external onlyOwner {
        MentorshipData storage mentorship = mentorships[mentorshipId];
        require(!mentorship.completed, "Mentorship already completed");

        mentorship.completed = true;
        mentorRewards[mentorship.mentor] += 1;

        emit MentorshipCompleted(mentorshipId, mentorship.mentor, mentorship.mentee);
    }

    function getMentorshipData(uint256 mentorshipId) external view returns (MentorshipData memory) {
        return mentorships[mentorshipId];
    }
}
