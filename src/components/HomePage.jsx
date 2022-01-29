import CTAButton from "./parts/CTAButton";
import  * as Style from "./parts/Esthete";



const homePage = () => {
    return ( 
        <Style.TheGrid>
            <Style.HeroPicture src="heroPicture.jpg">
            </Style.HeroPicture>
            <Style.ContentHeroPage>
                <Style.Uvp>Des sites web qui vous ressemblent pour attirer les bons clients</Style.Uvp>
                <Style.Activity>Conception de sites web et apps pour PMEs et entrepreneurs</Style.Activity>
                <CTAButton callToAction = "C'est parti !" />   
            </Style.ContentHeroPage>
        </Style.TheGrid>
     );
}






 
export default homePage;