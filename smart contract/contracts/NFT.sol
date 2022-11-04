// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Library for counter
import "./CounterLibrary.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;

    // tokenId will be of type Counter(struct counter from library)
    Counters.Counter private _tokenIds;
    address contractAddress;

    // provide the address of marketplace 
    constructor(address marketPlaceAddress) ERC721("Baadshahi Tokens", "BSTT") {
        contractAddress = marketPlaceAddress;
    }


    function createToken(string memory tokenURI) public returns (uint256) {

        // increase the tokenId value by 1
        _tokenIds.increaseValue();
        uint256 newItemId = _tokenIds.currentValue();

        // mint the token with user's address & itemId generated!
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
