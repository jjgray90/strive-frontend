import "./TextInput.scss";

const TextInput = ({ labelText, inputName, value, onChangeEvent }) => {
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
          required
        />
      </div>
    </div>
  );
};

export default TextInput;
