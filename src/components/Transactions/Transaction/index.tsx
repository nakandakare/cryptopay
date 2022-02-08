import useGetGif from 'hooks/useGetGif';
import { FunctionComponent } from 'react';
import { shortenAddress } from 'utils/utils';
import {
  Container,
  InnerContainer,
  AddressAndAmount,
  Text,
  Message,
  TimeStamp,
  TimeStampContainer,
  AText,
  GifImage
} from './styles';

export type TransactionProps = {
  addressFrom: string;
  addressTo: string;
  amount: string;
  timestamp: string;
  message: string;
  url: string;
  keyword: string;
};

const Transaction: FunctionComponent<TransactionProps> = ({
  addressTo,
  addressFrom,
  amount,
  timestamp,
  message,
  url,
  keyword
}) => {
  const gifUrl = useGetGif(keyword);

  return (
    <Container>
      <InnerContainer>
        <AddressAndAmount>
          <AText href={`https://ropsten.etherscan.io/address/${addressTo}`}>{`From: ${shortenAddress(
            addressTo
          )}`}</AText>
          <AText href={`https://ropsten.etherscan.io/address/${addressFrom}`}>{`To: ${shortenAddress(
            addressFrom
          )}`}</AText>
          <Text>{`Amount: ${amount}ETH`}</Text>
        </AddressAndAmount>
        <Message>{`Message: ${message}`}</Message>
        <GifImage src={gifUrl || url} />
        <TimeStampContainer>
          <TimeStamp>{timestamp}</TimeStamp>
        </TimeStampContainer>
      </InnerContainer>
    </Container>
  );
};

export default Transaction;
