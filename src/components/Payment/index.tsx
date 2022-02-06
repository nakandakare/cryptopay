import { EthereumCard, PaymentForm } from 'components';
import { Container } from './styles';

const Payment = () => {
  return (
    <Container>
      <EthereumCard />
      <PaymentForm />
    </Container>
  );
};

export default Payment;
