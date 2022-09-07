import "./TimeInput.scss";


const TimeInput = ({
  inputName,
  labelText,
  setHours,
  setMinutes,
  setSeconds,
  onChangeEvent,
}) => {
  
  return (
    <div className="time-input">
      <label htmlFor={inputName} className="time-input__label">
        {labelText}
      </label>
      <div className="time-input__container" onChange={onChangeEvent}>
        <input
          type="number"
          name="hours"
          className="time-input__input"
          placeholder="hours"
          onChange={(event) => setHours(event.target.value * 60 * 60)}
        />
        <input
          type="number"
          name="minutes"
          className="time-input__input"
          placeholder="mins"
          onChange={(event) => setMinutes(event.target.value * 60)}
        />
        <input
          type="number"
          name="seconds"
          className="time-input__input"
          placeholder="secs"
          onChange={(event) => setSeconds(event.target.value * 1)}
        />
      </div>
    </div>
  );
};

export default TimeInput;
