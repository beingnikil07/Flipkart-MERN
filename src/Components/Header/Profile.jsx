import { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MenuComponent = styled(Menu)`
    margin-top:8px;
`;
const LogOut = styled(Typography)`
        font-size:14px;
        margin-left:20px;
`;
const BoxDp = styled(Box)`
   display:flex;
`;

//receiving props through destructuring
const Profile = ({ Account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const logOutUser = () => {
        setAccount('');       //so that user can logout 
    };
    return (
        <>
            <BoxDp onClick={handleClick}><AccountCircleIcon /><Typography style={{ marginTop: 2, marginLeft: 5 }}>{Account}</Typography></BoxDp>
            <MenuComponent
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logOutUser(); }}>
                    <PowerSettingsNewIcon color="primary" />
                    <LogOut>Logout</LogOut>
                </MenuItem>
            </MenuComponent>
        </>
    )
}
export default Profile;