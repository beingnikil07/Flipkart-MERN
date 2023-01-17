//Components..
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, styled } from '@mui/material';
const Wrapper = styled(Box)`
    padding:10px 10px;
    background:#f2f2f2;
`;
const Home = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <Banner />
            </Wrapper>
        </>
    )
};
export default Home;