import { ethers } from 'ethers';
import FilmNFT from '../artifacts/contracts/FilmNFT.sol/FilmNFT.json';

export const contractId = import.meta.env.VITE_CONTRACT_ID;

export const provider = new ethers.providers.Web3Provider(window.ethereum as any);

export const signer = provider.getSigner();

export const contract = new ethers.Contract(contractId || '', FilmNFT.abi, signer);
