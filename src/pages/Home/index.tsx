import NFTItem from '@components/NFTItem';
import Wallet from '@components/Wallet/index';
import React, { useCallback, useEffect, useState } from 'react';
import { contract } from '@utils/contractService';

const Home = () => {
  const [totalNFT, setTotalNFT] = useState<number>(0);

  const getNFTCounter = useCallback(async () => {
    try {
      const total = await contract.count();
      setTotalNFT(parseInt(total, 10));
    } catch (e) {
      console.log({ e });
    }
  }, []);

  useEffect(() => {
    getNFTCounter();
  }, [getNFTCounter]);

  return (
    <div>
      <h2>Home</h2>
      <Wallet />
      <h6>Film collection</h6>
      <div>
        {Array(totalNFT + 1)
          .fill(0)
          .map((_, i) => (
            <NFTItem tokenId={i + 1} key={i} />
          ))}
      </div>
    </div>
  );
};

export default Home;
