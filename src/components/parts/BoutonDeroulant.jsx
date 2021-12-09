import  * as Style from "./Esthete";


const BoutonDeroulant = ({title,bgColorButton}) => {
    return (
        <div>
            <Style.DropDownMainPage bgColorButton={bgColorButton} >{title}</Style.DropDownMainPage>
        </div>
    );
}
 


export default BoutonDeroulant;