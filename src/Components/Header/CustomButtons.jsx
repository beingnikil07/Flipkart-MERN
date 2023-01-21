import { useState, useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { dataContext } from '../../context/dataProvider'; //importing context
//Components
import LoginDialog from '../Login/LoginDialog';

const Wrapper = styled(Box)`
      display:flex;
      margin:0 3% 0 auto; 
      &>button,&>p,&>div{
        margin-right:40px;
        font-size:15px; 
        align-items:center;
      }
`;
const Container = styled(Box)`
    display:flex;
`;

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
  const { Account } = useContext(dataContext);
  //i'm not extracting setAccount becz here i don't want to set state 
  //mai yha setAccount ko bhi le sakta hu but fayda kya jvv use he nii karna uska to 

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Wrapper>
      {/*Conditional rendering,agar Account mai value hai to dikha do otherwise login ke dikha do */}
      {
        Account ? <Typography>{Account}</Typography> : <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>

      }
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />  {/*Open aur setopen ko maine as a prop pass kiya aur send krr diya LoginDialog component ko so that ye bss login click prr he show aur band ho sake */}
    </Wrapper>
  )
}
export default CustomButtons;