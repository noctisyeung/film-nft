import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState<string>('');

  const getBalance = useCallback(async () => {
    const accounts = await window?.ethereum.request<string[]>({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    if (accounts && accounts.length > 0 && accounts[0] !== undefined) {
      const balance = await provider?.getBalance(accounts[0]);
      setBalance(ethers.utils.formatEther(balance));
    }
  }, []);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <div>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Wallet;
