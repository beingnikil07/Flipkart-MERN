import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, Divider, Button, styled } from '@mui/material';
import Countdown from 'react-countdown';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
//styles
const Component = styled(Box)`
    margin-top:10px;
    background-color:#ffffff;
`;
const DealHeading = styled(Box)`
    padding:15px 20px;
    display:flex;
`;
const DealText = styled(Typography)`
    font-size:22px;
    font-weight:550;
    margin-right:30px;
    line-height:1.5;
`;

const Timer = styled(Box)`
    display:flex;
    align-items:center;
    margin-Left:15px;
    color:#7f7f7f; 
`;

const ViewAllBtn = styled(Button)`
    margin-Left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600; 
`;

const Images = styled('img')({
    width: 'auto',
    height: '160px'
})

const Slide = ({ products }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    };
    return (
        <Component>
            <DealHeading>
                <DealText>Deal of the Day</DealText>
                <Timer>
                    <img src={timerURL} alt="timer" style={{ width: 24 }} />
                    <Countdown date={Date.now() + 3.6e+7} renderer={renderer} />
                </Timer>
                <ViewAllBtn variant="contained" color="primary">VIEW ALL</ViewAllBtn>
            </DealHeading>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                autoPlaySpeed={3000}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((product) => (
                        <Box textAlign="center" style={{ padding: '25px 15px' }}>
                            <Images src={product.url} alt="product" />
                        </Box>
                    ))
                }
            </Carousel>
        </Component>
    )
}
export default Slide;