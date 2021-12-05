import  * as Style from "./Esthete";



const SectionTitle = ({sectionTitle}) => {               // Utiliser pour afficher le titre d'un projet
    return (
        <div>
            <Style.StyledLittleTitle>{sectionTitle}</Style.StyledLittleTitle>
        </div>
    );
}
 



export default SectionTitle;