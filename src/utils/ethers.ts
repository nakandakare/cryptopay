import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from 'utils/constants';

//objet from window if metamask is installed.
const { ethereum } = window;

export const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //Get contract functions usign abi
  const transactionContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  return transactionContract;
};
