import CTAButton from "./parts/CTAButton";
import Picture from "./parts/Picture";

const homePage = () => {
    return ( 
        <div>
            <h1>Je crée de sites web qui vous ressemble pour attirer les bons clients</h1>
            <h2>Augmentez votre chiffre d'affaires et démarquez-vous</h2>
            <CTAButton callToAction = "Prendre contact" />
            <Picture imageLink = "heroPicture.png" imageDescription = "L'image principale"  />
        </div>
     );
}
 
export default homePage;