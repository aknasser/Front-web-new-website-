const InputForm = ({id, type, labelValue, value, inputHandler}) => {
    return (
        <label> {labelValue}
            <input id={id} type={type} value={value} onChange={inputHandler} />
        </label>
    );
}
 
export default InputForm;