import { Button, ButtonGroup,styled } from "@mui/material";

const Component=styled(ButtonGroup)`
    margin-top:30px;
`;

const StyledBtn=styled(Button)`
    border-radius:50%;

`;
const BtnGroup = () => {
    return <Component>
        <StyledBtn>-</StyledBtn>
        <StyledBtn disabled>1</StyledBtn>
        <StyledBtn>+</StyledBtn>
    </Component>
}
export default BtnGroup;