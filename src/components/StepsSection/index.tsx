import { Step } from 'components';
import { Container, Title, Steps } from './styles';
import { STEPS } from 'utils/constants';

type StepsProps = {
  name: string;
  text: string;
};

const StepsSection = () => {
  return (
    <Container>
      <Title>
        Take your transactions to the <br /> next level
      </Title>
      <Steps>
        {STEPS.map(({ name, text }: StepsProps, index: number) => (
          <Step key={name} name={name} text={text} position={index} lastStep={STEPS.length === index + 1} />
        ))}
      </Steps>
    </Container>
  );
};

export default StepsSection;
