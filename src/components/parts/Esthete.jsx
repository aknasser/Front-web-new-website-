import styled from "styled-components";



export const Colors = {
      primaryColor : "rgba(225, 44, 75, 1)",
      secundaryColor : "rgba(34, 56, 89, 1)",
      BGContent : "rgba(235, 235, 235, 1)"
};

export const BG = styled.div`
    background-color: ${Colors.BGContent};
`;


// NAVBAR

export const NavBarGrid = styled.nav`
    display: grid;
    background-color : ${Colors.primaryColor};
    position : sticky;
    top : 0;
    z-index: 3;
`;

export const Navbar = styled.nav`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction : row;
    z-index: 0;
    justify-content: space-between;
    padding: 0rem 1rem;
`;

export const CTANavbar = styled.h1`
    margin: 0rem;
    font-size: 2rem;
    color: white;
    cursor : pointer;
`;

export const NavBarCollapse = styled.nav`
    display : ${props => props.visibility};
    grid-area: 2 / 1 / 3 / 2;
    z-index : 3;
    position :absolute;
    background-color : ${Colors.secundaryColor};
    flex-direction : column;   
    width: 100%;
`;
 

export const ToggleButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor : pointer;`
    ;



// HOME

export const TheGrid = styled.div`
    display: grid;
    min-height: 35rem;
    overflow : hidden;
`;
// overflow : hidden ==> Pour éviter que l'image déborde sur le côté



export const HeroPicture = styled.img`
    object-fit: cover;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 0;
    opacity: 0.45;
    width: 206%;
    object-position: -12rem;
`;

export const ContentHeroPage = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    z-index : 1; 
`;                                                  
/*
Le contenu Textuel + CTA est calé dans une div called ContentHeroPage.Cette div est superposé à la heroPicture.
z-index laissé mais pas nécessaire. Dans la grille, quand les éléments sont superposés le dernier est au-dessus.

*/
export const Uvp = styled.h1`
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    padding: 0rem 1rem;

`;

export const Activity = styled.h2`
    color: white;
    font-size: 1rem;
    font-weight: lighter;
    padding: 4.5rem;
`;




// BLOG - PROJECTS


export const StyledSectionTitle = styled.h2 `
    color : white;
    text-transform : uppercase;
    margin : 1rem auto 2rem;
    font-size : 2.5rem;
    
`;

export const NavbarItem = styled(StyledSectionTitle)`
    font-size: 1.5rem;
`;

export const TitleSection = styled(StyledSectionTitle)`
    color :${Colors.secundaryColor};
    font-size : 3rem;
`;

export const ArticleTitle = styled(StyledSectionTitle)`
    font-size : 1rem;  
    color :white;
`;//1.5 REM for bigger screen 

export const Intro = styled.p`
    font-size: 1rem;
    font-style : italic;
    font-weight: 300;
`;

export const ArticleSubtitle = styled(Intro)`

`;

export const StyledPictureItem = styled.img`
    object-fit: cover;
    width: 100%;
    margin: 0.25rem auto 4rem
`;

export const PicContainer = styled.div`
    object-fit: cover;
    width: 100%;
`;

export const StyledLittleTitle = styled.button`
    font-size: 1.5rem;
    background-color: ${Colors.secundaryColor};
    padding: 0.5rem;
`;

export const StyledArticleTitle = styled(StyledLittleTitle)`
    font-size: 1rem;
`;

export const StyledDropDownButton = styled.h3`
    font-size : 1.25rem;
    background-color: ${(props) => props.bgColorButton};
    border-radius : 0.75rem;
    text-align: center;
    width: 75%;
    padding : 2.5rem;
    margin : 3rem auto;
`;

// FORM
export const StyledSubmitButton = styled.input`
    width: 75%;
    margin: 3rem auto 5rem;
    background-color : ${Colors.primaryColor};
    border : 0rem;
    border-radius : 0.5rem;
    -moz-border-radius : 0.5rem;
    -webkit-border-radius : 0.5rem;
    font-family : Segoe UI;
    font-weight : bold;
    font-size : 2rem;
    text-transform : uppercase;
    color : white;
    cursor : pointer;
`;


// BLOG MAIN PAGE

export const ChapeauBlog = styled(StyledDropDownButton)`
    padding :1.5rem;
    font-size : 1rem;
    margin : 2rem auto;
`;

export const InputSearchBlog = styled(StyledSubmitButton)`
    width: 60%;
    margin: 0rem auto 5rem;
    font-size: 1rem;
`;



//APPROCHE

export const BlocMyStyle = styled.div`
    background-color : ${(props) => props.bgColor};
    padding : 0rem 0rem 2rem;
` 






// BLOCPICTURE / APPROCHE - Les 2 blocs images présents sur la page d'accueil (après scroll)


export const BlocMyWork = styled.div`
    display : grid;
    min-height: 20rem;
    overflow : hidden;
`;

export const ArticlePicture = styled(BlocMyWork)`
    position: relative;
    top: 0.2rem;
`;


// Position  et top sont nécessaire

export const FilteredPicture = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    background-size : cover;
    opacity :${(props) => props.opacity || 0.8};
    width : 100%;
    height : 100%;
    z-index: 0;
`;

export const BlocTitle = styled.h4`
    grid-area: 1 / 1 / 2 / 2;
    color : white;
    text-transform : uppercase;
    font-size : 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    z-index : 1;

`;
// ARTICLE
export const InfoArticle = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    z-index : 1;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    color : white;
`;


export const KeywordsArticle = styled.h3`
    font-size: 0.75rem;
    padding: 0.25rem;
`;

export const BlocKeywords = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;


export const ContentArticle = styled.div`
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background-color: white;
    margin: 0rem;
    padding: 1rem;
    font-size: 0.8rem;
    text-align: left;
    position: relative;`;

export const ReadingProgressionBar = styled.span`
    font-size: 1rem;
`;


// FOOTER
export const StyledFooter = styled.div`
    background-color : ${Colors.primaryColor};
    color: white;
`

export const PrezFooter = styled.h5`
    margin: 0rem;
    padding: 1.5rem;
    font-size: 1.25rem;
    font-weight: 400;
`;

export const QuoteFooter = styled(Intro)`
    margin: 0rem;
    padding : 1.25rem;
`;


 
export default Colors;
