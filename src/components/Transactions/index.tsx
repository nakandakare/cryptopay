import { Container, Title, InnerContainer } from './styles';
import { Transaction } from 'components';
import { TransactionProps } from './Transaction';
import { useContext } from 'react';
import { TransactionContext } from 'context/TransactionContext';

const Transactions = () => {
  const { allTransactions, connectedAccount } = useContext(TransactionContext);
  const lastSixTransactions = allTransactions.slice(Math.max(allTransactions.length - 6, 0)).reverse();

  return (
    <Container>
      {connectedAccount ? (
        <Title>Latest Transactions</Title>
      ) : (
        <Title>Please connect your wallet to see the latest transactions</Title>
      )}
      <InnerContainer>
        {lastSixTransactions.map(
          (
            { addressFrom, addressTo, amount, timestamp, message, url, keyword }: TransactionProps,
            index: number
          ) => (
            <Transaction
              key={index}
              addressFrom={addressFrom}
              addressTo={addressTo}
              amount={amount}
              timestamp={timestamp}
              message={message}
              url={url}
              keyword={keyword}
            />
          )
        )}
      </InnerContainer>
    </Container>
  );
};

export default Transactions;
