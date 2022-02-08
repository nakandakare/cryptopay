import { FinanceContainer, FinanceImage, FinanceTexts, FinanaceText, FinanaceTitle } from './styles';

const FinanceInformation = () => {
  return (
    <FinanceContainer>
      <FinanceImage src={'images/finance.png'} alt="finance" />
      <FinanceTexts>
        <FinanaceTitle>
          Send Crypto <br />
          across the world
        </FinanaceTitle>
        <FinanaceText>
          Send & Receive payments in any way with <br /> crypto using CRYPTOPAY (please use Ropsten network)
        </FinanaceText>
      </FinanceTexts>
    </FinanceContainer>
  );
};

export default FinanceInformation;
