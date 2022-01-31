import  * as Style from "./Esthete";




const InputForm = ({id, type, labelValue, value, inputHandler}) => {
    return (
        <Style.FormField>
            <Style.StyledLabelForm htmlFor={id}> {labelValue}</Style.StyledLabelForm>
            <Style.StyledInputForm id={id} type={type} value={value} onChange={inputHandler} />

        </Style.FormField>
    );
}


export default InputForm;