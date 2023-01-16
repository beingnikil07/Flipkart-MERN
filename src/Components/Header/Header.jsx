import React from 'react';
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
const StyledHeader = styled(AppBar)`
        background:#2874f0;
        height:55px;
`;
const Component = styled(Box)`
    margin-left:12%;
    line-height:0;
`;
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;
const PlusLogo = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})
const logoUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";
const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                        </SubHeading>
                        <PlusLogo src={subUrl} alt="sub-logo" />
                    </Box>
                </Component>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;