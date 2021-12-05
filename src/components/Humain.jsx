import PictureItem from "./parts/PictureItem";
import PageTitle from "./parts/PageTitle";
import BoutonDeroulant from "./parts/BoutonDeroulant";
import HiddenText from "./parts/HiddenText";
import CTAButton from "./parts/CTAButton";


const Humain = () => {
    return (
        <div>
            <PageTitle pageTitle="Mon Approche"/>
            <PictureItem imageLink = "me.png" imageDescription = "It's me! Mario!"  />
            <BoutonDeroulant title="Mon Histoire"/>
            <BoutonDeroulant title="Mon Approche"/>
            <BoutonDeroulant title="Sommes-nous compatibles ?"/>
            <HiddenText content="Blablbla"/>                        {/*Le contenu du texte sera changé avec un hook useState / useReducer dépendant du bouton sur lequel a cliqué l'user. Boom! */}
            <CTAButton callToAction = "On en discute ?" />


        </div>
    );
}
 
export default Humain;