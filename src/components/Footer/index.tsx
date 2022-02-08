import { Container, TopContainer, BottomContainer, Text } from './styles';

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <Text>
          Contact me
          <br />
          kevin.nakandakare@gmail.com
        </Text>
      </TopContainer>
      <BottomContainer>
        <Text>@Kevin Nakandakare 2022</Text>
        <Text>All rights reserverd</Text>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
