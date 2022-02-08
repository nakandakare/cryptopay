/* eslint-disable @typescript-eslint/no-explicit-any */
import { EthereumCard, PaymentForm } from 'components';
import { TransactionContext } from 'context/TransactionContext';
import { useContext } from 'react';
import { Container } from './styles';

const Payment = () => {
  const { handleFormChange, formData, sendTransaction, isLoading } = useContext(TransactionContext);
  const { addressTo, amount } = formData;

  const handleFormSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <Container>
      <EthereumCard addressTo={addressTo} amount={amount} />
      <PaymentForm
        handleFormChange={handleFormChange}
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Payment;
