import "./AsideSelectShipping.css";
const AsideSelectShipping = ({title}) => {
  return (
    <div className="selector__wrapper">
      <select className="selector__options">
        <option>{title}</option>
      </select>
    </div>
  );
};
export default AsideSelectShipping;
