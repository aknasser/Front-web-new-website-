import styled from "styled-components";


const PageTitle = ({pageTitle}) => {
    return (
        <div>
            <StyledSectionTitle>{pageTitle}</StyledSectionTitle>
        </div>
      );
}
 
const StyledSectionTitle = styled.h2 `
    color : white;
    text-transform : uppercase;
    margin : 1rem auto 2rem;
    font-size : 2.5rem;
    
`


export default PageTitle;