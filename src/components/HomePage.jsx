import CTAButton from "./parts/CTAButton";
import Picture from "./parts/Picture";

const homePage = () => {
    return ( 
        <div>       {/* Ici lui calera la background-image */}
            <h1>Des sites web qui vous ressemblent pour attirer les bons clients</h1>
            <h2>Conception de sites web et apps pour PMEs et entrepreneurs</h2>
            <CTAButton callToAction = "Prendre contact" />
        </div>
     );
}
 
export default homePage;