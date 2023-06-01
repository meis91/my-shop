import React, {useState} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";

type SideMenuListItemProps = {
    text: string
}
function SideMenuListItem({text}: SideMenuListItemProps) {
    const [sublist, setSublist] = useState(false);
    const navigate = useNavigate;
    const toggleSublist = () =>{setSublist(!sublist)}

    return (
        <div key={text}>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={toggleSublist}
                >
                    <ListItemText primary={text}/>
                    <ArrowDropDownIcon/>
                </ListItemButton>
            </ListItem>
            {sublist ?
                <List>
                    {["Create", "Update", "Delete"].map((textCUD, index) => (
                        <div key={index + textCUD}>
                            <ListItem disablePadding>
                                <ListItemButton
                                >
                                    <ListItemText primary={textCUD + " " + text}/>
                                </ListItemButton>
                            </ListItem>
                        </div>
                    ))}
                </List>
                : null}
            <Divider/>
        </div>
    );
}

export default SideMenuListItem;