import { Box, Typography, styled, Button } from '@mui/material';
import { addEllipsis } from '../../utils/common-utils';
import BtnGroup from './BtnGroup';

const Component = styled(Box)`
    border:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`;
const LeftBox = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
  
`;
const SellerText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px; 

`;
const RemoveBtn = styled(Button)`
    margin-top:10px;
    font-size:16px; 
    font-weight:550;
    color:#000;
`;

const CartItems = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <>
            <Component>
                <LeftBox>
                    <img src={item.url} alt="product" style={{height:105}} />
                    <BtnGroup />
                </LeftBox>
                <Box style={{ margin: 20 }}>
                    <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                    <SellerText >Seller:RetailNet
                        <Box component='span'>
                            <img src={fassured} alt="flipkart assured" style={{ width: 50, marginLeft: '10px' }} />
                        </Box>
                    </SellerText>
                    <Typography style={{ margin: '20px 0px' }}>
                        <Box component='span' style={{ fontWeight: 600, fontSize: 17 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#388E3C' }}>{item.price.discount}</Box>
                    </Typography>
                    <RemoveBtn>Remove</RemoveBtn>
                </Box>
            </Component>
        </>
    )
}

export default CartItems;