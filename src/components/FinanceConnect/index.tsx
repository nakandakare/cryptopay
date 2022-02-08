import { Button } from 'components';
import { FunctionComponent } from 'react';
import FinanceInformation from './FinanceInformation';
import { Container } from './styles';

type Props = {
  connectWallet: () => void;
  connectedShortedAccount: string;
};

const FinanceConnect: FunctionComponent<Props> = ({ connectWallet, connectedShortedAccount }) => {
  return (
    <Container>
      <FinanceInformation />
      <Button
        text={connectedShortedAccount ? connectedShortedAccount : 'Connect Wallet'}
        height={50}
        noMargin
        fontSize={'1.2rem'}
        onClick={connectWallet}
      />
    </Container>
  );
};

export default FinanceConnect;
