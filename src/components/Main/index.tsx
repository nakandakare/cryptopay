import { useContext } from 'react';
import { FinanceConnect, Payment } from 'components';
import { Container } from './styles';
import { TransactionContext } from 'context/TransactionContext';

const Main = () => {
  const { connectWallet, connectedShortedAccount } = useContext(TransactionContext);

  return (
    <Container>
      <FinanceConnect connectWallet={connectWallet} connectedShortedAccount={connectedShortedAccount} />
      <Payment />
    </Container>
  );
};

export default Main;
