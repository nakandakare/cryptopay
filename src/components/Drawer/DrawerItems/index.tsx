import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { NAVBAR_ITEMS } from 'utils/constants';

type DrawerItemsProps = {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

const DrawerItems: FunctionComponent<DrawerItemsProps> = ({ setOpenDrawer }) => {
  return (
    <Box
      sx={{ width: 200, height: '100%', color: 'white', backgroundColor: '#1e1e1e' }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
      onKeyDown={() => setOpenDrawer(false)}>
      <List>
        {NAVBAR_ITEMS.map((text, index) => (
          <ListItem button key={text + index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerItems;
