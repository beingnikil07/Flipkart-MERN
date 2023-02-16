import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    [theme.breakpoints.down('md')]: {
        padding: '40px 0 0 108px',
        width: '110%',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0px',
    }

}))

const Image = styled('img')({
    padding: '25px'
});
const StyledBtn = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '4px',
    [theme.breakpoints.down('md')]: {
        width: '45%',
        height: '45px',
        marginBottom: '10px'
    }
}))

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = product;
    const AddToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');

    }
    return (
        <LeftContainer>
            <Box style={{
                padding: '15px auto',
                border: '1px solid #f0f0f0',

            }}>
                <Image src={product.detailUrl} alt="product-des-image" />
            </Box>
            <StyledBtn variant="contained" onClick={() => AddToCart()} style={{ background: '#fb541b' }}><Cart />Add to Cart</StyledBtn>
            <StyledBtn variant="contained" style={{ marginLeft: 10, background: '#ff9f00' }}><Flash />Buy Now</StyledBtn>
        </LeftContainer>
    )

}
export default ActionItem; 