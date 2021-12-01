import styled from "styled-components";
import CTAButton from "./parts/CTAButton";

const homePage = () => {
    return ( 
        <TheGrid>
            <HeroPicture src="heroPicture.jpg">
            </HeroPicture>
            <ContentHeroPage>
                <Uvp>Des sites web qui vous ressemblent pour attirer les bons clients</Uvp>
                <Activity>Conception de sites web et apps pour PMEs et entrepreneurs</Activity>
                <CTAButton callToAction = "Let's Go !" width="85%" />   
            </ContentHeroPage>
        </TheGrid>
     );
}



const TheGrid = styled.div`
    display: grid;
    min-height: 35rem;
    overflow : hidden;
`;
// overflow : hidden ==> Pour éviter que l'image déborde sur le côté



const HeroPicture = styled.img`
    object-fit: cover;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 0;
    opacity: 0.45;
    width: 206%;
    object-position: -12rem;
`;

const ContentHeroPage = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    z-index : 1; 
`;                                                  
/*
Le contenu Textuel + CTA est calé dans une div called ContentHeroPage.Cette div est superposé à la heroPicture.
z-index laissé mais pas nécessaire. Dans la grille, quand les éléments sont superposés le dernier est au-dessus.

*/
const Uvp = styled.h1`
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    padding: 0rem 1rem;

`;

const Activity = styled.h2`
    color: white;
    font-size: 1rem;
    font-weight: lighter;
    padding: 4.5rem;
`;



 
export default homePage;