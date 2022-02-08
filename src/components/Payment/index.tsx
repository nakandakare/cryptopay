/* eslint-disable @typescript-eslint/no-explicit-any */
import { EthereumCard, PaymentForm } from 'components';
import { TransactionContext } from 'context/TransactionContext';
import { useContext } from 'react';
import { Container } from './styles';

const Payment = () => {
  const { handleFormChange, formData, sendTransaction } = useContext(TransactionContext);

  const handleFormSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <Container>
      <EthereumCard />
      <PaymentForm
        handleFormChange={handleFormChange}
        formData={formData}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default Payment;
