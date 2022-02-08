import { FunctionComponent } from 'react';
import { Container, Item, ItemContainer, SoonBadge } from './styles';
import { NAVBAR_ITEMS } from 'utils/constants';
import { Button } from 'components';

type Props = {
  connectedShortenAccount: string;
  connectWallet: () => void;
};

const NavbarItems: FunctionComponent<Props> = ({ connectedShortenAccount, connectWallet }) => {
  return (
    <Container>
      {NAVBAR_ITEMS.map((item: string, index: number) => (
        <ItemContainer key={item + index}>
          <Item>{item}</Item>
          <SoonBadge>soon</SoonBadge>
        </ItemContainer>
      ))}
      <Button
        text={connectedShortenAccount ? connectedShortenAccount : 'Connect'}
        height={40}
        onClick={connectWallet}
      />
    </Container>
  );
};

export default NavbarItems;
