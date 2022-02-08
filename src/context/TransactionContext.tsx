/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState, FunctionComponent } from 'react';
import { getEthereumContract } from 'utils/ethers';
import { ethers } from 'ethers';

export const TransactionContext = createContext<any>({});

declare global {
  interface Window {
    ethereum: any;
  }
}

type FormProps = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

//objet from window if metamask is installed.
const { ethereum } = window;

export const TransactionProvider: FunctionComponent = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [connectedAccount, setConnectedAccount] = useState<string>('');
  const [connectedShortedAccount, setConnectedShortedAccount] = useState<string>('');
  const [formData, setFormData] = useState<FormProps>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  });
  const [transactionCount, setTransactionCount] = useState<string | number | null>(
    localStorage.getItem('transactionCount')
  );

  const handleFormChange = (e: any, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const makeAccountsShort = (str: string) => {
    return str.substring(0, 3) + '...' + str.substring(str.length - 3, str.length);
  };

  const checkIfWalletIsInstalled = () => {
    if (!ethereum) return alert('Please install metamask');
  };

  const checkIfWalletIsConnected = async () => {
    try {
      checkIfWalletIsInstalled();

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        setConnectedShortedAccount(makeAccountsShort(accounts[0]));
      } else {
        return console.log('no accounts found');
      }

      //getAllTransactions();
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  const connectWallet = async () => {
    try {
      checkIfWalletIsInstalled();

      //User connect wallet account.
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setConnectedAccount(accounts[0]);
      setConnectedShortedAccount(makeAccountsShort(accounts[0]));
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  const sendTransaction = async () => {
    try {
      checkIfWalletIsInstalled();

      if (connectedAccount) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        //transaction using etereum
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{ from: connectedAccount, to: addressTo, gas: '0x5208', value: parsedAmount._hex }]
        });

        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);

        const transactionCount = await transactionContract.getTransactionCount();
        setTransactionCount(transactionCount.toNumber());
      } else {
        alert('Please install or connect metamask');
      }
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        connectedShortedAccount,
        handleFormChange,
        formData,
        setFormData,
        sendTransaction,
        isLoading
      }}>
      {children}
    </TransactionContext.Provider>
  );
};
