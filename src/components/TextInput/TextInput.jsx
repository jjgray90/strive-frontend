import "./TextInput.scss";

const TextInput = ({
  labelText,
  inputName,
  ref,
  value,
  defaultValue,
  onChangeEvent,
  onLoadEvent,
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
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onChange={onChangeEvent}
          onLoad={onLoadEvent}
          placeholder={placeholder}
          // required
        />
      </div>
    </div>
  );
};

export default TextInput;
