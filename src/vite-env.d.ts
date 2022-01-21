/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }

  interface ImportMetaEnv {
    readonly VITE_CONTRACT_ID: string;
    readonly VITE_PINATA_CID: string;
    readonly VITE_PINATA_API_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
