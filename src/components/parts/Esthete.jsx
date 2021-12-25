import styled from "styled-components";



const deviceSize = {
    mobileS :"320px",
    mobileM :"375px",
    mobileL :"425px",
    tablet :"768px",
    laptopS :"1024px",
    laptopM :"1440px"
};



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
    height: 100vh;
    overflow : hidden;
    @media(min-width :${deviceSize.laptopS}) {
        margin: 0rem auto 2rem;
    }

`;
// overflow : hidden ==> Pour éviter que l'image déborde sur le côté
// vh, cette mesure nous permet de déterminer la hauteur du en fonction d'un % du viewport. 20vh = 20% du viewport


export const HeroPicture = styled.img`
    object-fit: cover;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 0;
    opacity: 0.45;
    width: 206%;
    height: 100%;
    object-position: -12rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 100%;
        object-position: 0rem -2rem;
    }
    @media(min-width :${deviceSize.laptopS}) {
        width: 100%;
        max-height: 70%;
        object-position: 0rem -14rem;
    }
`;

export const ContentHeroPage = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    z-index : 1;
    @media(min-width :${deviceSize.laptopS}) {
        padding : 4rem 0rem;
    } 
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

export const StyledCTAButton = styled.button`
    width: 85%;
    margin: 3rem 0rem;
    @media(min-width :${deviceSize.laptopS}) {
        width: 50%;
        margin: 10rem auto;

`;



// BLOG - PROJECTS


export const StyledSectionTitle = styled.h2 `
    color : ${(props) => props.colorTitle || "white"};
    text-transform : uppercase;
    margin : 0rem auto 2rem;
    font-size : 2.25rem;    
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


export const FormTitle = styled(StyledSectionTitle)`
    margin: 7rem auto 2rem;
        &::before {
            display: block;
            content: "";
            margin-top: -3rem;
            height: 3rem;
            visibility: none;
            pointer-events: none;
        }
`


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
    margin: 0.25rem auto 4rem;

    @media(min-width :${deviceSize.tablet}) {
        width: 60%;
        border-radius: 0.5rem;
    }
    
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
    max-width: 75%;
    padding: 1.5rem;
    margin : 3rem auto;
    @media(min-width :${deviceSize.tablet}) {
        width: 15rem;
        height: 15rem;
    }
`;




// FORM
export const StyledSubmitButton = styled.input`
    width: 70vw;
    margin: 3rem auto 5rem;
    padding : 1.5rem;
    background-color : ${Colors.primaryColor};
    border : 0rem;
    border-radius : 0.5rem;
    -moz-border-radius : 0.5rem;
    -webkit-border-radius : 0.5rem;
    font-family : Segoe UI;
    font-weight : bold;
    font-size : 1.5rem;
    text-transform : uppercase;
    color : white;
    cursor : pointer;
    @media(min-width :${deviceSize.tablet}) {
        width: 55vw;
        font-size : 2rem;
    }
`;


export const StyledLabelForm = styled.label`
    color: white;
    font-size: 1.5rem;
    text-align: left;
    font-weight: bold;
    padding: 1rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 12%
    }
`;




export const StyledInputForm = styled.input`
    font-size: 0.75rem;
    border-radius : 0.5rem;
    border : 0.25rem;
    -moz-border-radius : 0.5rem;
    -webkit-border-radius : 0.5rem;
    border : 0rem;
    height: 2rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 60%;
        margin: 1rem auto;
    }
`;

export const StyledTextarea = styled(StyledInputForm)`
    height: 8rem;
`;

export const FormField = styled.div`
    display : flex;
    flex-direction : column;
    padding: 1rem;
    @media(min-width :${deviceSize.tablet}) {
        flex-direction : row;
    }
`;


export const StyledForm = styled.div`
    display : flex;
    width: 90vw;
    flex-direction: column;
    background-color : ${Colors.primaryColor};
    border-radius : 1rem;
    -moz-border-radius : 0.75rem;
    -webkit-border-radius : 0.75rem;
    padding: 2rem 0rem ;
    margin: 1rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 70vw;
        margin: 2rem auto;
    }
`;



// BLOG MAIN PAGE

export const ChapeauBlog = styled(StyledDropDownButton)`
    padding :1.5rem;
    font-size : 1rem;
    margin : 2rem auto;
`;

export const ButtonSearchBlog = styled(StyledSubmitButton)`
    min-width: 33%;
    padding: 0.5rem;
    margin: 0rem 0.5rem 5rem;
    font-size: 1rem;
    @media(min-width :${deviceSize.tablet}) {
        max-width: 25vw;
        font-size: 1.5rem;
    }
    @media(min-width :${deviceSize.laptopS}) {
        max-width: 20vw;
    }
`;

export const BoxSearchButton = styled.div`
    display : flex;
    flex-direction : row;
    max-width: 100%;
`;




export const FormSearch = styled.form`
    display : flex;
    flex-direction : column; 
    align-items: center;
`;


export const InputFormSearch = styled(StyledInputForm)`
    width : 50%;
    margin: 2rem auto 1rem;
    @media(max-width :${deviceSize.tablet}) {
            width: 75%;
        }
`;



//APPROCHE


export const BlocMyStyle = styled.div`
    background-color : ${(props) => props.bgColor};
    padding : 5rem 0rem 10rem;
    &::before {
        display: block;
        content: "";
        margin-top: -3rem;
        height: 3rem;
        visibility: none;
        pointer-events: none;
    }
` 




export const TrioButton = styled.div`
    @media(min-width :${deviceSize.tablet}) {
        display : flex;
        flex-direction : row; 
        justify-content : space-evenly;
    }
`;


export const ContainerBenefitsMenu = styled.div`
    display: grid;
`;


export const DropDownMainPage = styled(StyledDropDownButton)`
    @media(min-width :${deviceSize.tablet}) {
        width: 25vw;
        height: 15rem;
        display: flex;
        align-items: center;  
        justify-content: center;
        grid-area: 1 / 1 / 2 / 2;
`;

export const DetailsApproche = styled(StyledDropDownButton)`
    display : ${props => props.visibility};
    background-color : ${(props) => props.bgColor};
    color : ${(props) => props.txtColor};
    font-size : 1.25rem;
    font-style : italic;
    font-weight: 300;
    margin: -2rem auto 5rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 25vw;
        align-items: center;
        grid-area: 1 / 1 / 2 / 2;
        position : absolute;
    }
    
`;

// BLOCPICTURE / APPROCHE - Les 2 blocs images présents sur la page d'accueil (après scroll)


export const FlexboxBloc = styled.div`
    @media(min-width :${deviceSize.tablet}) {
        display : flex;
        flex-direction : row;
    }
`; 


export const BlocMyWork = styled.div`
    display : grid;
    height: 50vh;
    overflow : hidden;
    @media(min-width :${deviceSize.laptopS}) {
        height: 75vh;
    }
`;

export const ArticlePicture = styled(BlocMyWork)`
    position: relative;
    top: 0.2rem;
    @media(min-width :${deviceSize.mobileL}) {
        width: 100vw;
        height: 100%;
        margin : 1rem auto;
        border-radius: 0.5rem;
    }
`;


// Position  et top sont nécessaire

export const FilteredPicture = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    background-size : cover;
    opacity :${(props) => props.opacity || 0.8};
    width : 100%;
    height: 100%;
    z-index: 0;
    @media(min-width :${deviceSize.tablet}) {
        width: 50vw;
    }
`;

export const BlocTitle = styled.h4`
    grid-area: 1 / 1 / 2 / 2;
    color : white;
    text-transform : uppercase;
    font-size : 4rem;
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
    justify-content: space-around;
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
    position: relative;
    @media(min-width :${deviceSize.mobileL}) {
        font-size : 1.25rem;
        padding : 5rem 1.5rem;
        margin : -2rem auto 0rem;
    }
    @media(min-width :${deviceSize.tablet}) {
    }    
    @media(min-width :${deviceSize.laptopS}) {
        padding : 7rem 10rem;
    }        
`;

export const ReadingProgressionBar = styled.span`
    font-size: 1rem;
    color : ${Colors.secundaryColor};
`;

export const PictureArticle = styled(FilteredPicture)`
    border-radius: 0.5rem;
    @media(min-width :${deviceSize.tablet}) {
        width: 60vw;
        margin: 1rem auto;
    }   
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

export const socialMediaIcon = styled.img`
    margin: 0rem auto;
    max-width: 5vw;
`;


 
export default Colors;
