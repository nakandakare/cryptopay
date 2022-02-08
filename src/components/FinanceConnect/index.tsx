import { Button } from 'components';
import { FunctionComponent } from 'react';
import FinanceInformation from './FinanceInformation';
import { Container } from './styles';

type Props = {
  connectWallet: () => void;
  connectedShortenAccount: string;
};

const FinanceConnect: FunctionComponent<Props> = ({ connectWallet, connectedShortenAccount }) => {
  return (
    <Container>
      <FinanceInformation />
      <Button
        text={connectedShortenAccount ? connectedShortenAccount : 'Connect Wallet'}
        height={50}
        noMargin
        fontSize={'1.2rem'}
        onClick={connectWallet}
      />
    </Container>
  );
};

export default FinanceConnect;
