import { Box, Typography, styled } from '@mui/material';
import { useState, useEffect } from 'react';

const HeaderWrapper = styled(Box)`
        padding:15px 24px;
        background:#fff;
        border:1px solid #f0f0f0;
`;
const Heading = styled(Typography)`
    color:#878787;
`;
const Container = styled(Box)`
    padding:15px 24px;
    background:#fff;
    &>p{
        margin-bottom:20px;
        font-size:14px
    }
    &>h6{
        margin-bottom:20px;
    }
`;
const Price = styled(Box)`
    float:right;
`;
const Discount = styled(Typography)`
    color:green;
    font-weight:520; 
`;

const TotalBalance = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    //call only if cartItems changes 
    useEffect(() => {
        Amount();
    }, [cartItems])

    //it will compute all 
    const Amount = () => {
        let discount = 0, price = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }


    return (
        <div>
            <Box>
                <HeaderWrapper>
                    <Heading>PRICE DETAILS</Heading>
                </HeaderWrapper>
                <Container>
                    <Typography>Price({cartItems.length})item
                        <Price component='span'>₹{price}</Price>
                    </Typography>
                    <Typography>Discount
                        <Price component='span'>{discount}</Price>
                    </Typography>
                    <Typography>Delivery Charges
                        <Price component='span'>₹40</Price>
                    </Typography>
                    <Typography variant='h6'>Total Amount
                        <Price component='span'>₹{price - discount + 40}</Price>
                    </Typography>
                    <Discount>You will save ₹{discount - 40} on this order </Discount>
                </Container>
            </Box>
        </div>
    )
}
export default TotalBalance;