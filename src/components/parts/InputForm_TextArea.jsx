import  * as Style from "./Esthete";


const InputForm_TextArea = ({id, rows, labelValue, value, inputHandler}) => {
    return (
        <Style.FormField>
            <Style.StyledLabelForm for={id}> {labelValue}</Style.StyledLabelForm>
            <Style.StyledTextarea id={id} rows={rows} value={value} onChange={inputHandler} ></Style.StyledTextarea>

        </Style.FormField>
    );
}


export default InputForm_TextArea;