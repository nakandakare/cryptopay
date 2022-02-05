import { FunctionComponent, useState } from 'react';
import { Container, DrawerIcon } from './styles';
import { Logo, NavbarItems, Drawer } from 'components';
import { useIsMobile } from 'hooks';

const Navbar: FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { isMobile } = useIsMobile();

  return (
    <Container isMobile={isMobile}>
      <Logo />
      {isMobile ? <DrawerIcon onClick={() => setOpenDrawer(true)} /> : <NavbarItems />}
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Container>
  );
};

export default Navbar;
