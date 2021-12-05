import  * as Style from "./Esthete";


const BoutonDeroulant = ({title,bgColorButton}) => {
    return (
        <div className = "boutonDeroulant">
            <Style.StyledDropDownButton bgColorButton={bgColorButton} >{title}</Style.StyledDropDownButton>
        </div>
    );
}
 


export default BoutonDeroulant;