import * as Style from "./Esthete";



const HiddenText = ({content, displayHiddenText, bgHiddenText, txtColor}) => {
    return (
        <Style.DetailsApproche visibility = {displayHiddenText} bgColor = {bgHiddenText} txtColor = {txtColor} >
            <p>{content}</p>
        </Style.DetailsApproche>
    );
}
 
export default HiddenText;