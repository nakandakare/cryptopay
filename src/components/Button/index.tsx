import { FunctionComponent } from 'react';
import { Container, Text } from './styles';

type ButtonProps = {
  text: string;
  height: number;
  onClick: () => void;
  noMargin?: boolean;
  fontSize?: string;
};

const Button: FunctionComponent<ButtonProps> = ({ text, height, noMargin, fontSize, onClick }) => {
  return (
    <Container height={height} noMargin={noMargin} onClick={onClick}>
      <Text fontSize={fontSize}>{text}</Text>
    </Container>
  );
};

export default Button;
