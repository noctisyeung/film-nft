// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract FilmNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) private existingUri;

    constructor() ERC721('FilmNFT', 'NYKHFILM') {}

    function _baseURI() internal pure override returns (string memory) {
        return 'ipfs://';
    }

    // Alowing NFT Owner to Mint the token
    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    // Function to check is the current content owned by someone already
    function isContentOwned(string memory uri) public view returns (bool) {
        return existingUri[uri] == 1;
    }

    // Function for user to pay for the NFT and mint it
    function payToMint(address to, string memory metaUri) public payable returns (uint256) {
        require(existingUri[metaUri] != 1, 'NFT already minted');
        require(msg.value >= 0.01 ether, 'NFT must be paid');

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        existingUri[metaUri] = 1;
        _mint(to, tokenId);
        _setTokenURI(tokenId, metaUri);

        return tokenId;
    }

    function count() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
}
