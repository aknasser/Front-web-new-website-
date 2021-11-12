import { Link } from "react-router-dom"


const CTAButton = ({callToAction}) => {
    return (
        <div className ="CTA">
            <Link to="/contact">
                <button>{callToAction}</button>
            </Link>
        </div>
    );
}
 
export default CTAButton;