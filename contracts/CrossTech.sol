// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract CrossTech is ERC721 {
    
    mapping (uint256 => string) private baseURI;
    constructor() ERC721("CrossTech", "NFT CrossTech") {

    }

    // .../.json
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return baseURI[tokenId];
    }

    function mint(address to, uint256 tokenId,string memory uri) external {
        baseURI[tokenId]=uri;
        _mint(to, tokenId);
    }
}