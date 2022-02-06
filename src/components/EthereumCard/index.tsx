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

const EthereumCard = () => {
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
          <ToAddress>0x7cC...c09409</ToAddress>
          <CurrencyAndAmount>
            <Currency>Ethereum</Currency>
            <Amount>$200</Amount>
          </CurrencyAndAmount>
        </WalletInfo>
      </InnerContainer>
    </Container>
  );
};

export default EthereumCard;
