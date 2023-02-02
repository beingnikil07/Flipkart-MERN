import Slide from "./Slide";
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    display:flex;
`;
const LeftBox = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));
const RightBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    width: '18%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));


const MidSlide = ({ products, title, timer }) => {
    const addUrl = "https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/flipkart-save-on-the-flights-cheaper-flights-elsewhere-ad-times-of-india-bangalore-01-02-2019.png";

    return (
        <Component>
            <LeftBox>
                <Slide products={products}
                    title={title}
                    timer={timer}
                />
            </LeftBox>
            <RightBox>
                <img src={addUrl} alt="advertisement" style={{ width: 238 }} />
            </RightBox>
        </Component>
    )
}
export default MidSlide;