import { FunctionComponent } from 'react';
import { Container, Text } from './styles';

type ButtonProps = {
  text: string;
  height: number;
  onClick: () => void;
  border?: string;
  noMargin?: boolean;
  fontSize?: string;
  bgTransparent?: boolean;
  mdWidth?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  text,
  height,
  noMargin,
  fontSize,
  onClick,
  border,
  bgTransparent,
  mdWidth
}) => {
  return (
    <Container
      height={height}
      noMargin={noMargin}
      onClick={onClick}
      border={border}
      mdWidth={mdWidth}
      bgTransparent={bgTransparent}>
      <Text fontSize={fontSize}>{text}</Text>
    </Container>
  );
};

export default Button;
