import styled from "styled-components";
import BoutonDeroulant from "./parts/BoutonDeroulant";
/* import HiddenText from "./parts/HiddenText";*/
import PageTitle from "./parts/PageTitle";




const Approche = ({detailsApproche}) => {
    return (
        <>
            {detailsApproche.map(detail => (
                <BlocMyStyle bgColor = {detail.bgColor}>
                    <PageTitle pageTitle={detail.title} />
                    {detail.categories.map(categorie => (
                        <div>
                            <BoutonDeroulant title={categorie.intitule} bgColorButton = {categorie.buttonColor}/>
                            {/* <HiddenText content={categorie.hiddenText}/> */}
                        </div>

                    ))}


                </BlocMyStyle>
                    ))}

        </>

    );
}

const BlocMyStyle = styled.div`
    background-color : ${(props) => props.bgColor};
    padding : 0rem 0rem 2rem;
` 

export default Approche;