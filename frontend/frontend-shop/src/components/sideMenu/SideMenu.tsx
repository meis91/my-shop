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
import SideMenuEntity from "./SideMenuEntity";


type SideMenuProps = {
    closeSideMenu: () => void
}

function SideMenu({closeSideMenu}: SideMenuProps) {

    return (
        <Box
            sx={{width: 'top' ? 'auto' : 250}}
            role="presentation"
        >
            <List>
                {["product", "brand", "category", "discount"].map((text, index) => (
                    <SideMenuEntity entity={text} key={text + index} closeSideMenu={closeSideMenu}/>
                ))}
            </List>
        </Box>
    );
}

export default SideMenu;