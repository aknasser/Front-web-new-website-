import  * as Style from "./Esthete";





const InputSubmit = ({cta, bgButton, txtColor}) => {
    return ( 
        <div>
            <Style.StyledSubmitButton type ="submit" value={cta} bgButton= {bgButton} txtColor={txtColor} />
        </div>
     );
}




export default InputSubmit;