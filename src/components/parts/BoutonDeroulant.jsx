import styled from "styled-components";

const BoutonDeroulant = ({title,bgColorButton}) => {
    return (
        <div className = "boutonDeroulant">
            <StyledDropDownButton bgColorButton={bgColorButton} >{title}</StyledDropDownButton>
        </div>
    );
}
 
const StyledDropDownButton = styled.h3`
    font-size : 1.25rem;
    background-color: ${(props) => props.bgColorButton};
    border-radius : 0.75rem;
    text-align: center;
    width: 75%;
    padding : 2.5rem;
    margin : 3rem auto;
`;


export default BoutonDeroulant;