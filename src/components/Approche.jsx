import BoutonDeroulant from "./parts/BoutonDeroulant";
import  * as Style from  "./parts/Esthete";
/* import HiddenText from "./parts/HiddenText";*/
import PageTitle from "./parts/PageTitle";




const Approche = ({detailsApproche}) => {
    return (
        <>
            {detailsApproche.map(detail => (
                <Style.BlocMyStyle bgColor = {detail.bgColor}>
                    <PageTitle pageTitle={detail.title} />
                    {detail.categories.map(categorie => (
                        <div>
                            <BoutonDeroulant title={categorie.intitule} bgColorButton = {categorie.buttonColor}/>
                            {/* <HiddenText content={categorie.hiddenText}/> */}
                        </div>

                    ))}


                </Style.BlocMyStyle>
                    ))}

        </>

    );
}



export default Approche;