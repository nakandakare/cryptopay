import { FunctionComponent } from 'react';
import { Container, Text } from './styles';

type ButtonProps = {
  text: string;
  height: number;
  noMargin?: boolean;
  fontSize?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ text, height, noMargin, fontSize }) => {
  return (
    <Container height={height} noMargin={noMargin}>
      <Text fontSize={fontSize}>{text}</Text>
    </Container>
  );
};

export default Button;
