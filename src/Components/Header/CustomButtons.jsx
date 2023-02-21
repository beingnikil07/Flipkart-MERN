import { useState, useContext } from 'react';
import { Box, Button, Typography, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { dataContext } from '../../context/dataProvider'; //importing context
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 3% 0 auto',
  '&>*': {
    marginRight: '40px !important',
    fontSize: 15,
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }

}))


const LoginButton = styled(Button)`
    color:#2874f0;
    background:#fff;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px; 
    box-shadow:none;
    font-weight:600;
    height:32px;
`;
const CustomButtons = () => {
  const [open, setOpen] = useState(false); //setting initial value of dialog box is false
  const { Account, setAccount } = useContext(dataContext);
  //i'm not extracting setAccount becz here i don't want to set state 
  //mai yha setAccount ko bhi le sakta hu but fayda kya jvv use he nii karna uska to 

  const openDialog = () => {
    setOpen(true);
  }
  const { cartItems } = useSelector(state => state.cart);
  return (
    <Wrapper>
      {/*Conditional rendering,agar Account mai value hai to dikha do otherwise login ke dikha do */}
      {
        Account ? <Profile Account={Account} setAccount={setAccount} /> : <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>

      }
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="primary">
          <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft:'5px'}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />  {/*Open aur setopen ko maine as a prop pass kiya aur send krr diya LoginDialog component ko so that ye bss login click prr he show aur band ho sake */}
    </Wrapper>
  )
}
export default CustomButtons;