import  * as Style from "./Esthete";





const InputSubmit = ({cta}) => {
    return ( 
        <div>
            <Style.StyledSubmitButton type ="submit" value={cta}/>
        </div>
     );
}




export default InputSubmit;