import { FunctionComponent } from 'react';
import {
  Container,
  InnerContainer,
  CardIcons,
  EthereumIconContainer,
  EthereumIcon,
  InfoIcon,
  WalletInfo,
  ToAddress,
  Currency,
  Amount,
  CurrencyAndAmount
} from './styles';

type Props = {
  addressTo: string;
  amount: string;
};

const EthereumCard: FunctionComponent<Props> = ({ addressTo, amount }) => {
  return (
    <Container>
      <InnerContainer>
        <CardIcons>
          <EthereumIconContainer>
            <EthereumIcon />
          </EthereumIconContainer>
          <InfoIcon title={'Ethereum Card :)'} />
        </CardIcons>
        <WalletInfo>
          <ToAddress>{addressTo}</ToAddress>
          <CurrencyAndAmount>
            <Currency>Ethereum</Currency>
            <Amount>${amount ? amount : 0}</Amount>
          </CurrencyAndAmount>
        </WalletInfo>
      </InnerContainer>
    </Container>
  );
};

export default EthereumCard;
