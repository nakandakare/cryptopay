import Drawer from '@mui/material/Drawer';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { DrawerItems } from 'components';

type DrawerProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

const DrawerComponent: FunctionComponent<DrawerProps> = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <DrawerItems setOpenDrawer={setOpenDrawer} />
    </Drawer>
  );
};

export default DrawerComponent;
