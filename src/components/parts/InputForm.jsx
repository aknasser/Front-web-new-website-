

const InputForm = ({id, type, labelValue, value, inputHandler}) => {
    return (
        <div className="form-field">
            <label for={id}> {labelValue}</label>
            <input id={id} type={type} value={value} onChange={inputHandler} />

        </div>
    );
}


export default InputForm;