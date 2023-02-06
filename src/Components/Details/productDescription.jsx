import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../../redux/actions/productActions';
import { Box, Typography, styled, Grid } from '@mui/material';
import ActionItem from './ActionItem';
import ProductInfo from './productInfo';


const Component = styled(Box)`
    background-color:#f2f2f2;
    margin-top:55px;
`;
const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: '#ffffff',
    display: 'flex'
}));

const RightContainer = styled(Grid)(({ theme }) => ({
    marginTop: '55px',
    [theme.breakpoints.down('md')]: {
        margin: 'auto'
    }

}));

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


    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    {/*Left box */}
                    <Grid item lg={4} md={8} sm={8} xs={12} >
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductInfo product={product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    )

}
export default ProductDescription;