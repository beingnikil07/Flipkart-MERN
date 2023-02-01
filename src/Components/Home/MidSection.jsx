import { imageURL } from "../../Constants/data"
import { Box } from '@mui/material';
const MidSection = () => {
    return (
        <Box style={{ display: 'flex' }}>
            {
                imageURL.map(image => (
                    <img src={image} alt="images" style={{ width: '100%' }} />
                ))
            }
        </Box>
    )
}
export default MidSection;