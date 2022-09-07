import "./TextInput.scss";

const TextInput = ({
  labelText,
  inputName,
  value,
  onChangeEvent,
  placeholder,
}) => {
  return (
    <div className="text-input">
      <label htmlFor={inputName} className="text-input__label">
        {labelText}
      </label>

      <div className="text-input__container">
        <input
          type="text"
          name={inputName}
          className="text-input__input"
          value={value}
          onChange={onChangeEvent}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default TextInput;
