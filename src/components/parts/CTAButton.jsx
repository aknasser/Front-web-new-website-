import { Link } from "react-router-dom"
import styled from "styled-components";
import  * as Style from "./Esthete";

const CTAButton = ({callToAction}) => {
    return (
        <div className ="CTA">
            <Link to="/contact">
                <Style.StyledCTAButton>{callToAction}</Style.StyledCTAButton>
            </Link>
        </div>
    );
}



 
export default CTAButton;