import ContainerBoutonMenu from "./parts/ContainerBoutonMenu";
import  * as Style from  "./parts/Esthete";
import PageTitle from "./parts/PageTitle";




const Approche = ({detailsApproche}) => {



    return (
        <>
            {detailsApproche.map(detail => (
                <Style.BlocMyStyle bgColor = {detail.bgColor} id={detail.id} marginTop = {detail.marginTop} key= {detail.id}>
                    <PageTitle 
                        pageTitle={detail.title} 
                        colorTitle = {detail.colorTitle}
                    />
                    <Style.TrioButton>
                        {detail.categories.map(categorie => (
                                <ContainerBoutonMenu 
                                    title={categorie.intitule} 
                                    bgColorButton = {categorie.buttonColor}
                                    content={categorie.hiddenText}
                                    txtColor = {categorie.textColor}
                                    picture = {categorie.picture}
                                    key = {categorie.intitule}
                                 />
                        ))}
                    </Style.TrioButton>
                </Style.BlocMyStyle>
                    ))}

        </>

    );
}



export default Approche;