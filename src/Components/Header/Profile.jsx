import { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const MenuComponent = styled(Menu)`
    margin-top:8px;
`;
const LogOut = styled(Typography)`
        font-size:14px;
        margin-left:20px;
`;

//receiving props through destructuring
const Profile = ({ Account }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{Account}</Typography></Box>
            <MenuComponent
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <PowerSettingsNewIcon color="primary" />
                    <LogOut>Logout</LogOut>
                </MenuItem>
            </MenuComponent>
        </>
    )
}
export default Profile;