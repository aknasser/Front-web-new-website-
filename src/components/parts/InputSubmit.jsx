import styled from "styled-components";




const InputSubmit = ({cta}) => {
    return ( 
        <div>
            <StyledSubmitButton type ="submit" value={cta}/>
        </div>
     );
}

const StyledSubmitButton = styled.input`
    width: 75%;
    margin: 1rem;
`;


export default InputSubmit;