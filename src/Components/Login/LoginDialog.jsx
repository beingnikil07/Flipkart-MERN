import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material';

const OutmostWrapper = styled(Box)`
    height:70vh; 
    width:90vh;
`;

//Left wale box mai to sirf ek image he
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat; 
    height:83.001%;
    width:28%;
    padding:45px 35px;
    &>p,h5{
        color:#fff;
        font-weight:500
    }
`;
const FormWrapper = styled(Box)`
     display:flex;
     flex-direction:column; 
     padding:25px 35px;
     flex:1;
     &>div,button,p{
        margin-top:20px;
     }
 `;
const LoginButton = styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
 `;
const RequestOtpButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%); 
 `;
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
 `;
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
 `;

const AccountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: "Sign up with your mobile number to get started"
    }

}

const LoginDialog = ({ open, setOpen }) => {
    //State mai initially login wala object rakha maine
    const [account, toggleAccount] = useState(AccountInitialValues.login)

    const toggleSignUp = () => {
        toggleAccount(AccountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(AccountInitialValues.login); // login ko hatane ke baad dobara se login he show ho isliye state ko change kiya close hone prr
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <OutmostWrapper>   {/* Wrapper for all */}
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image> {/* wrapper for left */}
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <FormWrapper>  {/*Wrapper for right */}
                                <TextField variant='standard' label="Enter Email/Mobile number" />
                                <TextField variant='standard' label="Enter Password" />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOtpButton>Request OTP</RequestOtpButton>
                                <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
                            </FormWrapper>
                            :
                            <FormWrapper>  {/*Wrapper for right */}
                                <TextField variant='standard' label="Enter Firstname" />
                                <TextField variant='standard' label="Enter Lastname" />
                                <TextField variant='standard' label="Enter Username" />
                                <TextField variant='standard' label="Enter Email" />
                                <TextField variant='standard' label="Enter Password" />
                                <TextField variant='standard' label="Enter Mobile" />
                                <LoginButton>Continue</LoginButton>
                            </FormWrapper>
                    }
                </Box>
            </OutmostWrapper>
        </Dialog>
    )

}
export default LoginDialog;




//True rahega to login wala form rahega agar false hoti hai condition to chalega hamara signup wala
//avv conditions ko hum aaise likhenge to hai nii hum state ke through conditions ko handle karenge  