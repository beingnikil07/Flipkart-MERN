import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../../redux/actions/productActions';
import { Box, Typography, styled, Grid } from '@mui/material';
import ActionItem from './ActionItem';

const Component = styled(Box)`
    background-color:#f2f2f2;
    margin-top:55px;
`;
const Container = styled(Grid)`
    background-color:#ffffff;
    display:flex;
`;
const RightContainer = styled(Grid)`
    margin-top:50px;
`;


/*Abhi products ko hum database se fetch marenge based on product id aur ye hum redux kii help se 
   karenge useEffect ko isliye use kiya kyuki mai component ke render hote se ye perform karna 
    chahta hu.Aur iske liye hum react-router ke useParams hook ka use karte hai  
*/
const ProductDescription = () => {
    const dispatch = useDispatch();   //initializing hook
    const { id } = useParams();

    //redux store se value nikal rhe hai,useSelector mai humko state ka access milta 
    //hai pure redux store kii....Hum loading aur product ko nikal rhe hai aur dependency
    // mai de rhe hai useEffect ko jisse koi change ho jaise he product aur loading mai
    // useEffect render ho reagain

    const { loading, product } = useSelector(state => state.getProductsDetails);


    useEffect(() => {
        //ye condition isliye lagayi jisse infinite time products fetch na ho loop mai
        if (product && id !== product.id) {
            dispatch(getProductsDetails(id));
        }

    }, [dispatch, id, product, loading]);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    {/*Left box */}
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                            7 Ratings & 2 Reviews
                            <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
                        </Typography>
                        <Typography>
                            <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
                        </Typography>
                    </RightContainer>
                </Container>
            }
        </Component>
    )

}
export default ProductDescription;