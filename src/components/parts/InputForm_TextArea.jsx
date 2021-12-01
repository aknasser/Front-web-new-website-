

const InputForm_TextArea = ({id, rows, labelValue, value, inputHandler}) => {
    return (
        <div className="form-field">
            <label for={id}> {labelValue}</label>
            <textarea id={id} rows={rows} value={value} onChange={inputHandler} ></textarea>

        </div>
    );
}


export default InputForm_TextArea;