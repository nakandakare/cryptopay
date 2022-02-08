import { FunctionComponent } from 'react';
import { Container, Image, InnerContainer, StepBadge, Text } from './styles';

type Props = {
  lastStep?: boolean;
  position: number;
  name: string;
  text: string;
};

const Step: FunctionComponent<Props> = ({ lastStep, name, text, position }) => {
  return (
    <Container lastStep={lastStep}>
      <InnerContainer>
        <Image src={`images/${name}.svg`} alt={name} />
        <StepBadge>Step {position}</StepBadge>
        <Text>{text}</Text>
      </InnerContainer>
    </Container>
  );
};

export default Step;
