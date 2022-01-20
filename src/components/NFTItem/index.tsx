import { contract, signer } from '@utils/contractService';
import { ethers } from 'ethers';
import React, { useState } from 'react';

interface Props {
  tokenId?: number;
}

const NFTItem: React.FC<Props> = ({ tokenId }) => {
  const [isMinted, setMinted] = useState(false);
  const metaUri = '';

  const checkOwnership = async () => {
    const isContentOwned = await contract.isContentOwned(metaUri);
    setMinted(isContentOwned);
  };

  const handleMint = async () => {
    try {
      const connection = contract.connect(signer);
      const addr = connection.addr;

      const result = await contract.payToMint(addr, metaUri, {
        value: ethers.utils.parseEther('0.1'),
      });

      await result.wait();
    } catch (error) {}
  };

  return (
    <div>
      <img
        style={{ width: 150, height: 150 }}
        src={!isMinted ? 'https://via.placeholder.com/150.png' : ''}
      />
      <p>{!isMinted ? 'Get It' : 'NFT ITEM #1'}</p>
      <button disabled={isMinted} onClick={handleMint}>
        {isMinted ? 'Opensea' : 'Mint'}
      </button>
    </div>
  );
};

export default NFTItem;
