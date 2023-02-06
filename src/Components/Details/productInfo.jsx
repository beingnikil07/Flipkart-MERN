import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
     &>p{
        font-size:14px;
        margin-top:10px;
     }
`;
const StyledBadge = styled(Badge)`
    color:#26a541;
`;

const Columntext = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    &>td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`;

const ProductInfo = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    // abhi hum delivery 5 days ka time denge aur ye time hum date object se get krr sakte hai 
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
            7 Ratings & 2 Reviews
            <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
            <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available offers</Typography>
        <SmallText>
            <Typography><StyledBadge /> Bank Offer10% off on AU Bank Credit Card Transactions, up to ₹1,500. On orders of ₹10,000 and above T&C</Typography>
            <Typography><StyledBadge /> Bank Offer10% off on Indian Bank Mastercard Debit Cards, up to ₹250. On orders of ₹2000 and above T&C</Typography>
            <Typography><StyledBadge /> Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyledBadge /> FreebieAirtel Xstream Entertainment Plan T&C</Typography>
            <Typography><StyledBadge /> Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C</Typography>
            <Typography><StyledBadge /> Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹750*Know More</Typography>
        </SmallText>

        <Table>
            <TableBody>
                <Columntext>
                    <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} |₹40 </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                    <TableCell >No Warranty</TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                    <TableCell>
                        <Box component='span' style={{ color: '#2874f0' }}>Delhivery</Box>
                        <Typography >GST invoice available</Typography>
                        <Typography >View more Sellers starting from ₹{product.price.cost} </Typography>
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{ width: 390 }} alt="Flipkartpoints" />
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </Columntext>
            </TableBody>
        </Table>
    </>

}
export default ProductInfo;