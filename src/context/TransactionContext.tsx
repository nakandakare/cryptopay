/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState, FunctionComponent } from 'react';
import { getEthereumContract } from 'utils/ethers';
import { ethers } from 'ethers';
import { shortenAddress } from 'utils/utils';

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

type TransactionFromBlockcahin = {
  receiver: string;
  sender: string;
  timestamp: any;
  message: string;
  keyword: string;
  amount: any;
};

//objet from window if metamask is installed.
const { ethereum } = window;

export const TransactionProvider: FunctionComponent = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [connectedAccount, setConnectedAccount] = useState<string>('');
  const [connectedShortenAccount, setConnectedShortenAccount] = useState<string>('');
  const [formData, setFormData] = useState<FormProps>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  });
  const [transactionCount, setTransactionCount] = useState<string | number | null>(
    localStorage.getItem('transactionCount')
  );
  const [allTransactions, setAllTransactions] = useState([]);

  const handleFormChange = (e: any, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionContract = getEthereumContract();

        const availableTransactions = await transactionContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction: TransactionFromBlockcahin) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18
          })
        );

        setAllTransactions(structuredTransactions);
      } else {
        console.log('Ethereum is not present');
      }
    } catch (error) {
      console.log(error);
    }
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
        setConnectedShortenAccount(shortenAddress(accounts[0]));
      } else {
        return console.log('no accounts found');
      }

      getAllTransactions();
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
      setConnectedShortenAccount(shortenAddress(accounts[0]));
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionContract = getEthereumContract();
        const currentTransactionCount = await transactionContract.getTransactionCount();

        window.localStorage.setItem('transactionCount', currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object');
    }
  };

  const sendTransaction = async () => {
    try {
      checkIfWalletIsInstalled();

      if (connectedAccount) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        setIsLoading(true);
        //transaction using etereum
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{ from: connectedAccount, to: addressTo, gas: '0x5208', value: parsedAmount._hex }]
        });

        //interact to smart contract paying gas fee to EVM
        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);
        alert('Transaction success');

        const transactionCount = await transactionContract.getTransactionCount();
        setTransactionCount(transactionCount.toNumber());
      } else {
        alert('Please install or connect metamask');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();

    //remove connected account on wallet disconnect.
    ethereum.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length < 1) {
        setConnectedAccount('');
        setConnectedShortenAccount('');
      }
    });
  }, [transactionCount, connectedAccount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        connectedShortenAccount,
        handleFormChange,
        formData,
        setFormData,
        sendTransaction,
        isLoading,
        transactionCount,
        allTransactions,
        setAllTransactions
      }}>
      {children}
    </TransactionContext.Provider>
  );
};
