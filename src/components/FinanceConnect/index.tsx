import { Button } from 'components';
import {
  Container,
  FinanaceText,
  FinanaceTitle,
  FinanceContainer,
  FinanceImage,
  FinanceTexts
} from './styles';

const FinanceConnect = () => {
  return (
    <Container>
      <FinanceContainer>
        <FinanceImage src={'images/finance.png'} alt="finance" />
        <FinanceTexts>
          <FinanaceTitle>
            Send Crypto <br />
            across the world
          </FinanaceTitle>
          <FinanaceText>
            Send & Receive payments in any way <br />
            easily with crypto using CRYPTOPAY
          </FinanaceText>
        </FinanceTexts>
      </FinanceContainer>
      <Button text={'Connect wallet'} height={50} noMargin />
    </Container>
  );
};

export default FinanceConnect;
