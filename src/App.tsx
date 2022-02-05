import { FunctionComponent } from 'react';
import { Navbar, Main } from 'components';
import { Container } from './styles';

const App: FunctionComponent = () => {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
};

export default App;
