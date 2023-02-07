import { React, useState } from 'react';
import { AppBar, Toolbar, styled, IconButton, Box, Typography, Drawer } from '@mui/material';
import SearchBox from './SearchBox';
import CustomButtons from './CustomButtons';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
        background:#2874f0;
        height:55px;
`;
const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    color:inherit;
    text-decoration:none;
`;
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;
const PlusLogo = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({

    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const logoUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const Wrapper = styled(Box)`
        width:200px;
    `;

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuBtn onClick={handleOpen} color="inherit">
                    <MenuIcon />
                </MenuBtn>
                <Drawer open={open} onClose={handleClose}>
                    <Wrapper>
                        <CustomButtons />
                    </Wrapper>
                </Drawer>
                <Component to="/">
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                        </SubHeading>
                        <PlusLogo src={subUrl} alt="sub-logo" />
                    </Box>
                </Component>
                <SearchBox />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;