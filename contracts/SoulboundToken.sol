// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulboundToken is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) private _tokenURIs;

    event SoulboundMinted(address indexed recipient, uint256 tokenId, string metadataURI);

    constructor() ERC721("Soulbound Achievement Token", "SBT") {}

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://";
    }

    function mintSBT(address recipient, string memory metadataURI) external onlyOwner {
        require(balanceOf(recipient) == 0, "Recipient already has an SBT");
        uint256 tokenId = nextTokenId++;
        _mint(recipient, tokenId);
        _tokenURIs[tokenId] = metadataURI;

        emit SoulboundMinted(recipient, tokenId, metadataURI);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokenURIs[tokenId];
    }

    function transferFrom(
        address,
        address,
        uint256
    ) public pure override {
        revert("SBTs are non-transferable");
    }

    function safeTransferFrom(
        address,
        address,
        uint256
    ) public pure override {
        revert("SBTs are non-transferable");
    }

    function safeTransferFrom(
        address,
        address,
        uint256,
        bytes memory
    ) public pure override {
        revert("SBTs are non-transferable");
    }
}
