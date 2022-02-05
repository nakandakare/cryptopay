import { FunctionComponent } from 'react';
import { Container, Item } from './styles';
import { NAVBAR_ITEMS } from 'utils/constants';
import { Button } from 'components';

const NavbarItems: FunctionComponent = () => {
  return (
    <Container>
      {NAVBAR_ITEMS.map((item: string, index: number) => (
        <Item key={item + index}>{item}</Item>
      ))}
      <Button text={'Connect'} height={40} />
    </Container>
  );
};

export default NavbarItems;
