import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions/productActions'; //isme hamari api rakhi hui hai 
import { useSelector } from "react-redux";
//Components..
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, styled } from '@mui/material';
const Wrapper = styled(Box)`
    padding:10px 10px;
    background:#f2f2f2;
`;
const Home = () => {
    //object destructuring from getProducts redux state 
   const {products}= useSelector(state => state.getProducts); //ye getProducts reducer wala nii ye redux kii state hai 
   console.log(products);   //this will show you all products 

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        /* dispatch maim maine call kiye ye jayege avv iss pass wale kii defination prr 
           ,[]mai dispatch isliye diya jisse dispatch ke change hote he ye hamra change ho jaaye 
           mean ye dene ye useeffect hamara componentDidupdtae kii tarah behave karega
        */
    }, [dispatch]);


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