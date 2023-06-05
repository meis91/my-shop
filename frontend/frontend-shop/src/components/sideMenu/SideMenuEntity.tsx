import React, {useState} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {capitalizeFirstLetter} from "../../util";
import SideMenuEntityOperation from "./SideMenuEntityOperation";

type SideMenuListItemProps = {
    entity: string
    closeSideMenu: () => void
}
function SideMenuEntity({entity, closeSideMenu}: SideMenuListItemProps) {
    const [sublist, setSublist] = useState(false);

    const toggleSublist = () =>{setSublist(!sublist)}

    return (
        <div key={entity}>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={toggleSublist}
                >
                    <ListItemText primary={capitalizeFirstLetter(entity)}/>
                    <ArrowDropDownIcon/>
                </ListItemButton>
            </ListItem>
            {sublist ?
                <List>
                    {["create", "edit"].map((operation, index) => (
                        <SideMenuEntityOperation entity={entity} operation={operation} closeSideMenu={closeSideMenu}/>
                    ))}
                </List>
                : null}
            <Divider/>
        </div>
    );
}

export default SideMenuEntity;