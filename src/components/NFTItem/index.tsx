import { contract, signer } from '@utils/contractService';
import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';

interface Props {
  tokenId?: number;
}

const NFTItem: React.FC<Props> = ({ tokenId }) => {
  const { VITE_PINATA_CID, VITE_PINATA_API_URL } = import.meta.env;
  const [isMinted, setMinted] = useState(false);
  const metaUri = `${'QmSkENjbpB1ZTbcCRN6Ftou9iqC945w8uPXEghpfb6zcCr'}/${tokenId}.json`;
  const imageUrl = `${VITE_PINATA_API_URL}${VITE_PINATA_CID}/${tokenId}.jpeg`;

  const checkOwnership = useCallback(async () => {
    try {
      const isContentOwned = await contract.isContentOwned(metaUri);
      setMinted(isContentOwned);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleMint = async () => {
    try {
      const connection = contract.connect(signer);
      const addr = connection.address;

      const result = await contract.payToMint(addr, metaUri, {
        value: ethers.utils.parseEther('1'),
      });

      await result.wait();
      checkOwnership();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkOwnership();
  }, [checkOwnership]);

  return (
    <div>
      <img
        style={{ width: 150, height: 150 }}
        src={!isMinted ? 'https://via.placeholder.com/150.png' : imageUrl}
      />
      <p>{!isMinted ? 'Get It' : 'NFT ITEM #1'}</p>
      <button disabled={isMinted} onClick={handleMint}>
        {isMinted ? 'Opensea' : 'Mint'}
      </button>
    </div>
  );
};

export default NFTItem;
