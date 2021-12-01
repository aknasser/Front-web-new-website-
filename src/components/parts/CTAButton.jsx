import { Link } from "react-router-dom"
import styled from "styled-components";


const CTAButton = ({callToAction}) => {
    return (
        <div className ="CTA">
            <Link to="/contact">
                <StyledCTAButton>{callToAction}</StyledCTAButton>
            </Link>
        </div>
    );
}

const StyledCTAButton = styled.button`
    width: 85%;
    margin: 5rem 0rem;
`;

 
export default CTAButton;