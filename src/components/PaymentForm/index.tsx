import { Button } from 'components';
import { Container, InnerContainer, Inputs, Input, Line } from './styles';

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value?: string | number;
  handleChange: (e: React.FormEvent<HTMLInputElement>, name: string) => void;
};

const handleChange = (e: any, name: any) => {
  console.log(e, name);
};

const StyledInput = ({ placeholder, name, type, value, handleChange }: InputProps) => (
  <Input
    placeholder={placeholder}
    type={type}
    step={'0.0001'}
    value={value}
    onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, name)}
  />
);

const PaymentForm = () => {
  return (
    <Container>
      <InnerContainer>
        <Inputs>
          <StyledInput placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
          <StyledInput placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
          <StyledInput placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
          <StyledInput placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
        </Inputs>
        <Line />
        <Button
          text={'Send Now'}
          height={42}
          onClick={() => console.log('send')}
          noMargin
          bgTransparent
          border="#3d4f7c"
        />
      </InnerContainer>
    </Container>
  );
};

export default PaymentForm;
