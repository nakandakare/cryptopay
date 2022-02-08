import { FunctionComponent, useContext, useState } from 'react';
import { Container, DrawerIcon } from './styles';
import { Logo, NavbarItems, Drawer } from 'components';
import { useIsMobile } from 'hooks';
import { TransactionContext } from 'context/TransactionContext';

const Navbar: FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { isMobile } = useIsMobile();
  const { connectedShortedAccount, connectWallet } = useContext(TransactionContext);

  return (
    <Container isMobile={isMobile}>
      <Logo />
      {isMobile ? (
        <DrawerIcon onClick={() => setOpenDrawer(true)} />
      ) : (
        <NavbarItems connectedShortedAccount={connectedShortedAccount} connectWallet={connectWallet} />
      )}
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Container>
  );
};

export default Navbar;
