import BoutonDeroulant from "./parts/BoutonDeroulant";
import Picture from "./parts/Picture";
import HiddenText from "./parts/HiddenText";
import PageTitle from "./parts/PageTitle";




const Approche = () => {
    return (
        <div>
            <PageTitle pageTitle="Mon Approche"/>
            <BoutonDeroulant title="Génération de clients"/>
            <BoutonDeroulant title="Un design qui vous ressemble"/>
            <BoutonDeroulant title="Votre partenaire business"/>
            <BoutonDeroulant title="Transparence"/>
            <Picture imageLink="imageApproche.png" imageDescription="Une image inspirant la confiance"/>
            <HiddenText content="Blablbla"/>
        </div>
    );
}
 
export default Approche;