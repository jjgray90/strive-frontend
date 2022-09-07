import "./RadioButton.scss";

const RadioButton = ({
  inputName,
  labelText,
  value,
  startChecked,
  onInputEvent,
}) => {
  return (
    <div className="radio-button">
      <label className="radio-button__label" htmlFor={inputName}>{labelText}</label>
      <input
        type="radio"
        name={inputName}
        value={value}
        defaultChecked={startChecked}
        onInput={onInputEvent}
      />
    </div>
  );
};

export default RadioButton;
