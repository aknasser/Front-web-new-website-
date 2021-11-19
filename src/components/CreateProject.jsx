import axios from 'axios';
import * as React from 'react';
import InputForm from "./parts/InputForm";
import InputSubmit from './parts/InputSubmit';


const CreateProject = () => {

    const [titleValue, setTitleValue] = React.useState("");
    const [pictureValue, setPictureValue] = React.useState("");
    const [linkValue, setLinkValue] = React.useState("");
    const [descriptionValue, setDescriptionValue] = React.useState("");


    const inputHandlerTitle = (event) => {
        setTitleValue(event.target.value);
    };

    const inputHandlerPicture = (event) => {
        setPictureValue(event.target.value);
    };

    const inputHandlerLink = (event) => {
        setLinkValue(event.target.value);
    };

    const inputHandlerDescription = (event) => {
        setDescriptionValue(event.target.value);
    };



    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newProject = {                   // on définit la variable contenant les datas du prospect
            title : titleValue,
            picture : pictureValue,
            link : linkValue,
            description :descriptionValue,
        };
        console.log("Here we go!!!")
        const leadPosted = await axios.post("http://localhost:1993/project/create", newProject)
        console.log(leadPosted.data);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="title" 
                    type="text" 
                    labelValue="Title" 
                    value={titleValue} 
                    inputHandler={inputHandlerTitle}
                 />   

                <InputForm 
                    id="picture" 
                    type="text" 
                    labelValue="Picture" 
                    value={pictureValue} 
                    inputHandler={inputHandlerPicture}
                />

                <InputForm 
                    id="link" 
                    type="textarea" 
                    labelValue="Link" 
                    value={linkValue} 
                    inputHandler={inputHandlerLink}
                />

                <InputForm 
                    id="description" 
                    type="text" 
                    labelValue="Description" 
                    value={descriptionValue} 
                    inputHandler={inputHandlerDescription}
                />
                

                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default CreateProject;