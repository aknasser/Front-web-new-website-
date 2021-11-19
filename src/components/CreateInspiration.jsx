import axios from 'axios';
import * as React from 'react';
import InputForm from "./parts/InputForm";
import InputSubmit from './parts/InputSubmit';


const CreateInspiration = () => {

    const [quoteValue, setQuoteValue] = React.useState("");
    const [authorValue, setAuthorValue] = React.useState("");



    const inputHandlerQuote = (event) => {
        setQuoteValue(event.target.value);
    };

    const inputHandlerAuthor = (event) => {
        setAuthorValue(event.target.value);
    };




    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newInspiration = {                   // on définit la variable contenant les datas du prospect
            quote : quoteValue,
            author : authorValue,
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
                    labelValue="Title" 
                    value={quoteValue} 
                    inputHandler={inputHandlerQuote}
                 />   

                <InputForm 
                    id="author" 
                    type="text" 
                    labelValue="Picture" 
                    value={authorValue} 
                    inputHandler={inputHandlerAuthor}
                />


                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default CreateInspiration;