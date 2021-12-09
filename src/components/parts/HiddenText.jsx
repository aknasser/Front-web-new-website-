import * as Style from "./Esthete";



const HiddenText = ({content, displayHiddenText}) => {
    return (
        <Style.DetailsApproche visibility = {displayHiddenText} >
            <p>{content}</p>
        </Style.DetailsApproche>
    );
}
 
export default HiddenText;