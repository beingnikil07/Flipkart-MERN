//components
import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Navdata } from '../../Constants/data.js';
//Styles
const ComponentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '55px 130px 0px 130px',
    justifyContent: 'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
}));
const ContainerMap = styled(Box)`
    padding:12px 8px;
    text-align:center; 
`;
const Text = styled(Typography)`
    font-size:14px;
    font-weight:550;
    font-family:inherit;
`;


const NavBar = () => {
    return (
        <ComponentBox>
            {
                Navdata.map(data => (
                    <ContainerMap>
                        <img src={data.url} alt="products-categories" style={{ width: 64 }} />
                        <Text>{data.text}</Text>
                    </ContainerMap>
                ))
            }
        </ComponentBox>
    )
}
export default NavBar;