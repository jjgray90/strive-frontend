import "./Button.scss";

const Button = ({ onClick, type, label }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
