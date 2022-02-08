import { FunctionComponent } from 'react';
import { Navbar, Main, StepsSection, Transactions, Footer } from 'components';
import { Container } from './styles';

const App: FunctionComponent = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <StepsSection />
      <Transactions />
      <Footer />
    </Container>
  );
};

export default App;
