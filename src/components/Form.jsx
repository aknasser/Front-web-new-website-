import InputForm from "./parts/InputForm";

const Form = () => {
    return (
        <div>
            <form>
                <InputForm id="prenom" type="text" labelValue="Prénom" value=""/>        {/* value sera défini en utilisant un bon vieux hook useState */}
                <InputForm id="nom" type="text" labelValue="Nom" value=""/>
                <InputForm id="demande" type="textarea" labelValue="Demande" value=""/>
                <InputForm id="activite" type="text" labelValue="Activité" value=""/>
                <InputForm id="email" type="email" labelValue="Email" value=""/>
                <InputForm id="téléphone" type="text" labelValue="Téléphone" value=""/>
                <input type ="submit" value = "C'est parti !"/>
            </form>
        </div>
    );
}
 
export default Form;