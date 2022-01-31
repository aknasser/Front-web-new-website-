import  * as Style from "./Esthete";


const InputFormTextArea = ({id, rows, labelValue, value, inputHandler}) => {
    return (
        <Style.FormField>
            <Style.StyledLabelForm htmlFor={id}> {labelValue}</Style.StyledLabelForm>
            <Style.StyledTextarea id={id} rows={rows} value={value} onChange={inputHandler} ></Style.StyledTextarea>

        </Style.FormField>
    );
}


export default InputFormTextArea;