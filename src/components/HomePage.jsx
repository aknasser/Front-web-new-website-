import CTAButton from "./parts/CTAButton";
import  * as Style from "./parts/Esthete";



const homePage = () => {
    return ( 
        <Style.TheGrid>
            <Style.HeroPicture src="heroPicture.jpg">
            </Style.HeroPicture>
            <Style.ContentHeroPage>
                <Style.Uvp>Conception d'applications web et mobile pour neo-entrepreneurs et PMEs</Style.Uvp>
                <Style.Activity>Donne vie à ton projet avec une app bâtie sur mesure</Style.Activity>
                <CTAButton callToAction = "C'est parti !" />   
            </Style.ContentHeroPage>
        </Style.TheGrid>
     );
}






 
export default homePage;