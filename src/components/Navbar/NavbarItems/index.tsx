import { FunctionComponent } from 'react';
import { Container, Item } from './styles';
import { NAVBAR_ITEMS } from 'utils/constants';
import { Button } from 'components';

type Props = {
  connectedShortedAccount: string;
  connectWallet: () => void;
};

const NavbarItems: FunctionComponent<Props> = ({ connectedShortedAccount, connectWallet }) => {
  return (
    <Container>
      {NAVBAR_ITEMS.map((item: string, index: number) => (
        <Item key={item + index}>{item}</Item>
      ))}
      <Button
        text={connectedShortedAccount ? connectedShortedAccount : 'Connect'}
        height={40}
        onClick={connectWallet}
      />
    </Container>
  );
};

export default NavbarItems;
