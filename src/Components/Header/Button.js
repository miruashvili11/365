import './Button.css'

const Button = ({ content, className }) => {
  return (
    <div className="header__content">
      <button className={className}>{content}</button>
    </div>
  );
};

export default Button;
