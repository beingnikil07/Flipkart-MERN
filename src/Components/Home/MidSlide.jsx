import Slide from "./Slide";
import { Box,styled} from '@mui/material';
import { border } from "@mui/system";

const Component=styled(Box)`
    display:flex;
`;
const LeftBox=styled(Box)`
    width:83%;
`;
const RightBox=styled(Box)`
    background-color:#ffffff;
    padding:10px;
    margin-top:10px;
    margin-left:10px;
    width:18%;
    text-align:center;
     
`;


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
                <img src={addUrl} alt="advertisement" style={{width:238}} />
            </RightBox>
        </Component>
    )
}
export default MidSlide;