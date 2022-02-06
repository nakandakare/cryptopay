import { Button } from 'components';
import FinanceInformation from './FinanceInformation';
import { Container } from './styles';

const FinanceConnect = () => {
  return (
    <Container>
      <FinanceInformation />
      <Button
        text={'Connect Wallet'}
        height={50}
        noMargin
        fontSize={'1.2rem'}
        onClick={() => console.log('clicked')}
      />
    </Container>
  );
};

export default FinanceConnect;
