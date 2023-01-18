import Dialog from '@mui/material/Dialog';

const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose} >
            Hello dialog
        </Dialog>
    )

}
export default LoginDialog;

// onClose ek props hota hai jo kii hota hai Dialog component mai MUI ke aur open bhi ek props hota hai 