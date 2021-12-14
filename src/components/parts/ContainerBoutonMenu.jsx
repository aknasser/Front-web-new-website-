import BoutonDeroulant from "./BoutonDeroulant";
import useRevealContent from "./customHooks/useRevealContent";
import  * as Style from "./Esthete";
import HiddenText from "./HiddenText";



const ContainerBoutonMenu = ({title, bgColorButton, bgHiddenText, txtColor, content}) => {
    
    const [visibilityHiddenText, dispatchVisibility] = useRevealContent();

    const hiddenTextHandler = () => {
        if (visibilityHiddenText.data.visible === "none") { 
            dispatchVisibility({
                type :"CONTENT_EXTENDED",
                payload : "flex"
            });
        } else {
            dispatchVisibility({
                type :"CONTENT_CONDENSED",
                payload : "none"
            });
        };
    };
    
    
    return ( 
        <Style.ContainerBenefitsMenu onClick = {hiddenTextHandler}>
            <BoutonDeroulant title = {title} bgColorButton ={bgColorButton} />
            <HiddenText 
              content = {content}
              displayHiddenText = {visibilityHiddenText.data.visible}
              bgHiddenText={bgHiddenText}
              txtColor = {txtColor} 
            />
        </Style.ContainerBenefitsMenu>
     );
}
 
export default ContainerBoutonMenu;