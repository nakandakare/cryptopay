import styled from 'styled-components';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

export const Container = styled.div`
  width: 18rem;
  height: 10rem;
  background-image: url('images/ethereum-bg.png');
  background-size: cover;
  border-radius: 0.6rem;
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EthereumIconContainer = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
`;

export const EthereumIcon = styled(SiEthereum)`
  position: relative;
  top: 20%;
  font-size: 1.3rem;
`;

export const InfoIcon = styled(BsInfoCircle)`
  color: white;
`;

export const WalletInfo = styled.div``;

export const ToAddress = styled.div`
  box-sizing: border-box;
  color: white;
  width: 100%;
  border-radius: 0.5rem;
  background-color: rgba(33, 37, 41, 0.8);
  overflow: hidden;
  padding 0.2rem;
  min-height: 1.5rem;
  font-weight: 600;
`;

export const CurrencyAndAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.125rem;
  color: white;
`;

export const Currency = styled.div``;

export const Amount = styled.div``;
