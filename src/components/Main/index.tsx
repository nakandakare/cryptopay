import { useContext } from 'react';
import { FinanceConnect, Payment } from 'components';
import { Container } from './styles';
import { TransactionContext } from 'context/TransactionContext';

const Main = () => {
  const { connectWallet, connectedShortenAccount } = useContext(TransactionContext);

  return (
    <Container>
      <FinanceConnect connectWallet={connectWallet} connectedShortenAccount={connectedShortenAccount} />
      <Payment />
    </Container>
  );
};

export default Main;
