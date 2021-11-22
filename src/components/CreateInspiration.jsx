import axios from 'axios';
import * as React from 'react';
import InputForm from "./parts/InputForm";
import InputSubmit from './parts/InputSubmit';


const CreateInspiration = () => {

    const [state, setState] = React.useState({
        quote: "",
        author :""
    });


    const inputQuoteHandler = (event) => {                          // EXPLICATION DOUTEUSE W.I.P (voir cette exemple :https://stackoverflow.com/questions/57305227/how-to-use-map-function-for-hooks-usestate-properties)
        setState(state => ({                                     // setState prend pour paramètre une fonction anonyme de paramètre state qui prend un object QUI...
            ...state,                                           // garde ses valeurs / propriétés initiales SAUF...
            quote : event.target.value                            // ... quote correspond désormais à la valeur de la cible de l'event (ici onChange)
        }))
    };

    const inputAuthorHandler = (event) => {
        setState(state => ({
            ...state,
            author : event.target.value
    }))
    };



    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newInspiration = {                   // on définit la variable contenant les datas du prospect
            quote : state.quote,
            author : state.author,
        };
        console.log("Here we go!!!")
        const leadPosted = await axios.post("http://localhost:1993/inspiration/create", newInspiration)
        console.log(leadPosted.data);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="quote" 
                    type="text" 
                    labelValue="Citation" 
                    value={state.quote} 
                    inputHandler={inputQuoteHandler}
                 />   
                 

                 <InputForm 
                    id="author" 
                    type="text" 
                    labelValue="Author" 
                    value={state.author} 
                    inputHandler={inputAuthorHandler}
                 />   

                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default CreateInspiration;