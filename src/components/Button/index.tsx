import { FunctionComponent } from 'react';
import { Container, Text } from './styles';

type ButtonProps = {
  text: string;
  height: number;
  noMargin?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ text, height, noMargin }) => {
  return (
    <Container height={height} noMargin={noMargin}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
