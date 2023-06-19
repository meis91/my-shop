import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Link, useNavigate} from "react-router-dom";
import {capitalizeFirstLetter} from "../../util";

type SideMenuEntityOperationProps = {
    operation: string,
    entity: string,
    key: string,
    closeSideMenu: () => void
}

function SideMenuEntityOperation({entity, operation, key, closeSideMenu}: SideMenuEntityOperationProps) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        closeSideMenu();
        navigate(operation + "-" + entity)

    }

    return (
        <div key={key}>
            <ListItem disablePadding>

                    <ListItemButton
                        onClick={handleNavigation}
                    >
                        <ListItemText primary={capitalizeFirstLetter(operation) + " " + capitalizeFirstLetter(entity)}/>
                    </ListItemButton>

            </ListItem>
        </div>

    );
}

export default SideMenuEntityOperation;