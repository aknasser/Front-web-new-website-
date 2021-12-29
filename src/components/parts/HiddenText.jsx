import * as Style from "./Esthete";



const HiddenText = ({content, displayHiddenText, txtColor}) => {
    return (
        <Style.DetailsApproche visibility = {displayHiddenText}  txtColor = {txtColor} >
            {content}
        </Style.DetailsApproche>
    );
}
 
export default HiddenText;