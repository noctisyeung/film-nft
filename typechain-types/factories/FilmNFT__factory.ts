/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FilmNFT, FilmNFTInterface } from "../FilmNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "isContentOwned",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "metaUri",
        type: "string",
      },
    ],
    name: "payToMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f46696c6d4e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f4e594b4846494c4d000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61347d80620002cb6000396000f3fe60806040526004361061011f5760003560e01c8063715018a6116100a0578063b88d4fde11610064578063b88d4fde146103ec578063c87b56dd14610415578063d204c45e14610452578063e985e9c51461047b578063f2fde38b146104b85761011f565b8063715018a6146103195780638da5cb5b1461033057806395d89b411461035b5780639f1cabc614610386578063a22cb465146103c35761011f565b806323b872dd116100e757806323b872dd1461021d57806342842e0e14610246578063615fd9e21461026f5780636352211e1461029f57806370a08231146102dc5761011f565b806301ffc9a71461012457806306661abd1461016157806306fdde031461018c578063081812fc146101b7578063095ea7b3146101f4575b600080fd5b34801561013057600080fd5b5061014b600480360381019061014691906122fc565b6104e1565b60405161015891906127e6565b60405180910390f35b34801561016d57600080fd5b506101766105c3565b6040516101839190612aa3565b60405180910390f35b34801561019857600080fd5b506101a16105d4565b6040516101ae9190612801565b60405180910390f35b3480156101c357600080fd5b506101de60048036038101906101d9919061238f565b610666565b6040516101eb919061277f565b60405180910390f35b34801561020057600080fd5b5061021b600480360381019061021691906122c0565b6106eb565b005b34801561022957600080fd5b50610244600480360381019061023f9190612166565b610803565b005b34801561025257600080fd5b5061026d60048036038101906102689190612166565b610863565b005b6102896004803603810190610284919061226c565b610883565b6040516102969190612aa3565b60405180910390f35b3480156102ab57600080fd5b506102c660048036038101906102c1919061238f565b6109a8565b6040516102d3919061277f565b60405180910390f35b3480156102e857600080fd5b5061030360048036038101906102fe9190612101565b610a5a565b6040516103109190612aa3565b60405180910390f35b34801561032557600080fd5b5061032e610b12565b005b34801561033c57600080fd5b50610345610b9a565b604051610352919061277f565b60405180910390f35b34801561036757600080fd5b50610370610bc4565b60405161037d9190612801565b60405180910390f35b34801561039257600080fd5b506103ad60048036038101906103a8919061234e565b610c56565b6040516103ba91906127e6565b60405180910390f35b3480156103cf57600080fd5b506103ea60048036038101906103e59190612230565b610c91565b005b3480156103f857600080fd5b50610413600480360381019061040e91906121b5565b610ca7565b005b34801561042157600080fd5b5061043c6004803603810190610437919061238f565b610d09565b6040516104499190612801565b60405180910390f35b34801561045e57600080fd5b506104796004803603810190610474919061226c565b610d1b565b005b34801561048757600080fd5b506104a2600480360381019061049d919061212a565b610dc8565b6040516104af91906127e6565b60405180910390f35b3480156104c457600080fd5b506104df60048036038101906104da9190612101565b610e5c565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105ac57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105bc57506105bb82610f54565b5b9050919050565b60006105cf6008610fbe565b905090565b6060600080546105e390612cf9565b80601f016020809104026020016040519081016040528092919081815260200182805461060f90612cf9565b801561065c5780601f106106315761010080835404028352916020019161065c565b820191906000526020600020905b81548152906001019060200180831161063f57829003601f168201915b5050505050905090565b600061067182610fcc565b6106b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a7906129c3565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106f6826109a8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075e90612a43565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610786611038565b73ffffffffffffffffffffffffffffffffffffffff1614806107b557506107b4816107af611038565b610dc8565b5b6107f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107eb90612903565b60405180910390fd5b6107fe8383611040565b505050565b61081461080e611038565b826110f9565b610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084a90612a83565b60405180910390fd5b61085e8383836111d7565b505050565b61087e83838360405180602001604052806000815250610ca7565b505050565b600060016009836040516108979190612744565b908152602001604051809103902060009054906101000a900460ff1660ff1614156108f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ee906128a3565b60405180910390fd5b6000341161093a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093190612a63565b60405180910390fd5b60006109466008610fbe565b90506109526008611433565b60016009846040516109649190612744565b908152602001604051809103902060006101000a81548160ff021916908360ff1602179055506109948482611449565b61099e8184611617565b8091505092915050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890612943565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac290612923565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610b1a611038565b73ffffffffffffffffffffffffffffffffffffffff16610b38610b9a565b73ffffffffffffffffffffffffffffffffffffffff1614610b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b85906129e3565b60405180910390fd5b610b98600061168b565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610bd390612cf9565b80601f0160208091040260200160405190810160405280929190818152602001828054610bff90612cf9565b8015610c4c5780601f10610c2157610100808354040283529160200191610c4c565b820191906000526020600020905b815481529060010190602001808311610c2f57829003601f168201915b5050505050905090565b60006001600983604051610c6a9190612744565b908152602001604051809103902060009054906101000a900460ff1660ff16149050919050565b610ca3610c9c611038565b8383611751565b5050565b610cb8610cb2611038565b836110f9565b610cf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cee90612a83565b60405180910390fd5b610d03848484846118be565b50505050565b6060610d148261191a565b9050919050565b610d23611038565b73ffffffffffffffffffffffffffffffffffffffff16610d41610b9a565b73ffffffffffffffffffffffffffffffffffffffff1614610d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8e906129e3565b60405180910390fd5b6000610da36008610fbe565b9050610daf6008611433565b610db98382611a6c565b610dc38183611617565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e64611038565b73ffffffffffffffffffffffffffffffffffffffff16610e82610b9a565b73ffffffffffffffffffffffffffffffffffffffff1614610ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecf906129e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3f90612843565b60405180910390fd5b610f518161168b565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600081600001549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110b3836109a8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061110482610fcc565b611143576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113a906128e3565b60405180910390fd5b600061114e836109a8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806111bd57508373ffffffffffffffffffffffffffffffffffffffff166111a584610666565b73ffffffffffffffffffffffffffffffffffffffff16145b806111ce57506111cd8185610dc8565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166111f7826109a8565b73ffffffffffffffffffffffffffffffffffffffff161461124d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124490612a03565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b490612883565b60405180910390fd5b6112c8838383611a8a565b6112d3600082611040565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113239190612c0f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461137a9190612b88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b090612983565b60405180910390fd5b6114c281610fcc565b15611502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f990612863565b60405180910390fd5b61150e60008383611a8a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461155e9190612b88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61162082610fcc565b61165f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165690612963565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611686929190611f25565b505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156117c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b7906128c3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516118b191906127e6565b60405180910390a3505050565b6118c98484846111d7565b6118d584848484611a8f565b611914576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190b90612823565b60405180910390fd5b50505050565b606061192582610fcc565b611964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195b906129a3565b60405180910390fd5b600060066000848152602001908152602001600020805461198490612cf9565b80601f01602080910402602001604051908101604052809291908181526020018280546119b090612cf9565b80156119fd5780601f106119d2576101008083540402835291602001916119fd565b820191906000526020600020905b8154815290600101906020018083116119e057829003601f168201915b505050505090506000611a0e611c26565b9050600081511415611a24578192505050611a67565b600082511115611a59578082604051602001611a4192919061275b565b60405160208183030381529060405292505050611a67565b611a6284611c63565b925050505b919050565b611a86828260405180602001604052806000815250611d0a565b5050565b505050565b6000611ab08473ffffffffffffffffffffffffffffffffffffffff16611d65565b15611c19578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ad9611038565b8786866040518563ffffffff1660e01b8152600401611afb949392919061279a565b602060405180830381600087803b158015611b1557600080fd5b505af1925050508015611b4657506040513d601f19601f82011682018060405250810190611b439190612325565b60015b611bc9573d8060008114611b76576040519150601f19603f3d011682016040523d82523d6000602084013e611b7b565b606091505b50600081511415611bc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb890612823565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611c1e565b600190505b949350505050565b60606040518060400160405280600781526020017f697066733a2f2f00000000000000000000000000000000000000000000000000815250905090565b6060611c6e82610fcc565b611cad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca490612a23565b60405180910390fd5b6000611cb7611c26565b90506000815111611cd75760405180602001604052806000815250611d02565b80611ce184611d78565b604051602001611cf292919061275b565b6040516020818303038152906040525b915050919050565b611d148383611449565b611d216000848484611a8f565b611d60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d5790612823565b60405180910390fd5b505050565b600080823b905060008111915050919050565b60606000821415611dc0576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611f20565b600082905060005b60008214611df2578080611ddb90612d5c565b915050600a82611deb9190612bde565b9150611dc8565b60008167ffffffffffffffff811115611e34577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611e665781602001600182028036833780820191505090505b5090505b60008514611f1957600182611e7f9190612c0f565b9150600a85611e8e9190612da5565b6030611e9a9190612b88565b60f81b818381518110611ed6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611f129190612bde565b9450611e6a565b8093505050505b919050565b828054611f3190612cf9565b90600052602060002090601f016020900481019282611f535760008555611f9a565b82601f10611f6c57805160ff1916838001178555611f9a565b82800160010185558215611f9a579182015b82811115611f99578251825591602001919060010190611f7e565b5b509050611fa79190611fab565b5090565b5b80821115611fc4576000816000905550600101611fac565b5090565b6000611fdb611fd684612ae3565b612abe565b905082815260208101848484011115611ff357600080fd5b611ffe848285612cb7565b509392505050565b600061201961201484612b14565b612abe565b90508281526020810184848401111561203157600080fd5b61203c848285612cb7565b509392505050565b600081359050612053816133eb565b92915050565b60008135905061206881613402565b92915050565b60008135905061207d81613419565b92915050565b60008151905061209281613419565b92915050565b600082601f8301126120a957600080fd5b81356120b9848260208601611fc8565b91505092915050565b600082601f8301126120d357600080fd5b81356120e3848260208601612006565b91505092915050565b6000813590506120fb81613430565b92915050565b60006020828403121561211357600080fd5b600061212184828501612044565b91505092915050565b6000806040838503121561213d57600080fd5b600061214b85828601612044565b925050602061215c85828601612044565b9150509250929050565b60008060006060848603121561217b57600080fd5b600061218986828701612044565b935050602061219a86828701612044565b92505060406121ab868287016120ec565b9150509250925092565b600080600080608085870312156121cb57600080fd5b60006121d987828801612044565b94505060206121ea87828801612044565b93505060406121fb878288016120ec565b925050606085013567ffffffffffffffff81111561221857600080fd5b61222487828801612098565b91505092959194509250565b6000806040838503121561224357600080fd5b600061225185828601612044565b925050602061226285828601612059565b9150509250929050565b6000806040838503121561227f57600080fd5b600061228d85828601612044565b925050602083013567ffffffffffffffff8111156122aa57600080fd5b6122b6858286016120c2565b9150509250929050565b600080604083850312156122d357600080fd5b60006122e185828601612044565b92505060206122f2858286016120ec565b9150509250929050565b60006020828403121561230e57600080fd5b600061231c8482850161206e565b91505092915050565b60006020828403121561233757600080fd5b600061234584828501612083565b91505092915050565b60006020828403121561236057600080fd5b600082013567ffffffffffffffff81111561237a57600080fd5b612386848285016120c2565b91505092915050565b6000602082840312156123a157600080fd5b60006123af848285016120ec565b91505092915050565b6123c181612c43565b82525050565b6123d081612c55565b82525050565b60006123e182612b45565b6123eb8185612b5b565b93506123fb818560208601612cc6565b61240481612e92565b840191505092915050565b600061241a82612b50565b6124248185612b6c565b9350612434818560208601612cc6565b61243d81612e92565b840191505092915050565b600061245382612b50565b61245d8185612b7d565b935061246d818560208601612cc6565b80840191505092915050565b6000612486603283612b6c565b915061249182612ea3565b604082019050919050565b60006124a9602683612b6c565b91506124b482612ef2565b604082019050919050565b60006124cc601c83612b6c565b91506124d782612f41565b602082019050919050565b60006124ef602483612b6c565b91506124fa82612f6a565b604082019050919050565b6000612512601283612b6c565b915061251d82612fb9565b602082019050919050565b6000612535601983612b6c565b915061254082612fe2565b602082019050919050565b6000612558602c83612b6c565b91506125638261300b565b604082019050919050565b600061257b603883612b6c565b91506125868261305a565b604082019050919050565b600061259e602a83612b6c565b91506125a9826130a9565b604082019050919050565b60006125c1602983612b6c565b91506125cc826130f8565b604082019050919050565b60006125e4602e83612b6c565b91506125ef82613147565b604082019050919050565b6000612607602083612b6c565b915061261282613196565b602082019050919050565b600061262a603183612b6c565b9150612635826131bf565b604082019050919050565b600061264d602c83612b6c565b91506126588261320e565b604082019050919050565b6000612670602083612b6c565b915061267b8261325d565b602082019050919050565b6000612693602983612b6c565b915061269e82613286565b604082019050919050565b60006126b6602f83612b6c565b91506126c1826132d5565b604082019050919050565b60006126d9602183612b6c565b91506126e482613324565b604082019050919050565b60006126fc601083612b6c565b915061270782613373565b602082019050919050565b600061271f603183612b6c565b915061272a8261339c565b604082019050919050565b61273e81612cad565b82525050565b60006127508284612448565b915081905092915050565b60006127678285612448565b91506127738284612448565b91508190509392505050565b600060208201905061279460008301846123b8565b92915050565b60006080820190506127af60008301876123b8565b6127bc60208301866123b8565b6127c96040830185612735565b81810360608301526127db81846123d6565b905095945050505050565b60006020820190506127fb60008301846123c7565b92915050565b6000602082019050818103600083015261281b818461240f565b905092915050565b6000602082019050818103600083015261283c81612479565b9050919050565b6000602082019050818103600083015261285c8161249c565b9050919050565b6000602082019050818103600083015261287c816124bf565b9050919050565b6000602082019050818103600083015261289c816124e2565b9050919050565b600060208201905081810360008301526128bc81612505565b9050919050565b600060208201905081810360008301526128dc81612528565b9050919050565b600060208201905081810360008301526128fc8161254b565b9050919050565b6000602082019050818103600083015261291c8161256e565b9050919050565b6000602082019050818103600083015261293c81612591565b9050919050565b6000602082019050818103600083015261295c816125b4565b9050919050565b6000602082019050818103600083015261297c816125d7565b9050919050565b6000602082019050818103600083015261299c816125fa565b9050919050565b600060208201905081810360008301526129bc8161261d565b9050919050565b600060208201905081810360008301526129dc81612640565b9050919050565b600060208201905081810360008301526129fc81612663565b9050919050565b60006020820190508181036000830152612a1c81612686565b9050919050565b60006020820190508181036000830152612a3c816126a9565b9050919050565b60006020820190508181036000830152612a5c816126cc565b9050919050565b60006020820190508181036000830152612a7c816126ef565b9050919050565b60006020820190508181036000830152612a9c81612712565b9050919050565b6000602082019050612ab86000830184612735565b92915050565b6000612ac8612ad9565b9050612ad48282612d2b565b919050565b6000604051905090565b600067ffffffffffffffff821115612afe57612afd612e63565b5b612b0782612e92565b9050602081019050919050565b600067ffffffffffffffff821115612b2f57612b2e612e63565b5b612b3882612e92565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612b9382612cad565b9150612b9e83612cad565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612bd357612bd2612dd6565b5b828201905092915050565b6000612be982612cad565b9150612bf483612cad565b925082612c0457612c03612e05565b5b828204905092915050565b6000612c1a82612cad565b9150612c2583612cad565b925082821015612c3857612c37612dd6565b5b828203905092915050565b6000612c4e82612c8d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612ce4578082015181840152602081019050612cc9565b83811115612cf3576000848401525b50505050565b60006002820490506001821680612d1157607f821691505b60208210811415612d2557612d24612e34565b5b50919050565b612d3482612e92565b810181811067ffffffffffffffff82111715612d5357612d52612e63565b5b80604052505050565b6000612d6782612cad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d9a57612d99612dd6565b5b600182019050919050565b6000612db082612cad565b9150612dbb83612cad565b925082612dcb57612dca612e05565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4e465420616c7265616479206d696e7465640000000000000000000000000000600082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4e4654206d757374206265207061696400000000000000000000000000000000600082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6133f481612c43565b81146133ff57600080fd5b50565b61340b81612c55565b811461341657600080fd5b50565b61342281612c61565b811461342d57600080fd5b50565b61343981612cad565b811461344457600080fd5b5056fea2646970667358221220c80e3abcf1ca6b766644d84308a7057d1a7ec0cf9a091a3928ae8e143e50578664736f6c63430008040033";

type FilmNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FilmNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FilmNFT__factory extends ContractFactory {
  constructor(...args: FilmNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FilmNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FilmNFT> {
    return super.deploy(overrides || {}) as Promise<FilmNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FilmNFT {
    return super.attach(address) as FilmNFT;
  }
  connect(signer: Signer): FilmNFT__factory {
    return super.connect(signer) as FilmNFT__factory;
  }
  static readonly contractName: "FilmNFT";
  public readonly contractName: "FilmNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FilmNFTInterface {
    return new utils.Interface(_abi) as FilmNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FilmNFT {
    return new Contract(address, _abi, signerOrProvider) as FilmNFT;
  }
}
