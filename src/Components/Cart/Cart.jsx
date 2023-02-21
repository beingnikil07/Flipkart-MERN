import { Grid, Box, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
//components
import CartItems from './CartItems';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';


const Container = styled(Grid)(({ theme }) => ({
    padding: '20px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0px'
    }
}));

const Header = styled(Box)`
    padding:15px 24px;
    background:#fff;
`;

const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
    border-top:1px solid #f0f0f0;
`;

const BtnOrder = styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b; 
    color:#fff;
    width:252px;
    height:50px; 
    border-radius:2px;
`;
const LeftContainer = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',
}));

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length}) </Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    //passing as prop so that CartItems component can use items
                                    <CartItems item={item} />
                                ))

                            }
                            <ButtonWrapper>
                                <BtnOrder>Place Order</BtnOrder>
                            </ButtonWrapper>
                        </LeftContainer>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Container>
                    : <EmptyCart />
            }
        </>
    )
}
export default Cart;