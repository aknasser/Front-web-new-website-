const InputForm = ({id, type, labelValue, value}) => {
    return (
        <label> {labelValue}
            <input id={id} type={type} value={value}/>
        </label>
    );
}
 
export default InputForm;