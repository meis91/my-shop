import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SideMenuListItem from "./SideMenuListItem";

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type SideMenuProps = {
    toggleDrawer: () => void
    drawer: boolean
}

function SideMenu({toggleDrawer, drawer}: SideMenuProps) {

    /*const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawer({ ...drawer, [anchor]: open });
            };*/

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
>
    <List>
        {["Products", "Brands", "Categories", "Discounts"].map((text, index) => (
        <ListItem key={text} disablePadding>
    <ListItemButton>
        <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItemButton>
    </ListItem>
))}
    </List>
    <Divider />
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
    <ListItemButton>
        <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItemButton>
    </ListItem>
))}
    </List>
    </Box>
);

    return (
        <Box
            sx={{width: 'top' ? 'auto' : 250}}
            role="presentation"
        >
            <List>
                {["Product", "Brand", "Category", "Discount"].map((text) => (
                    <SideMenuListItem text={text}/>
                ))}
            </List>
        </Box>
    );
}

export default SideMenu;