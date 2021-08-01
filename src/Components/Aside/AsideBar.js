import "./AsideBar.css";
import AsideSelectProduct from "./AsideSelectProduct";
import AsideSelectShipping from "./AsideSelectShipping";

const AsideBar = ({ allData, setData }) => {
  return (
    <aside className="aside catalog__filter">
      <AsideSelectProduct title="Niche" allData={allData} setData={setData} />
      <AsideSelectProduct title="Niche" />
      <AsideSelectProduct title="Category" />
      <AsideSelectShipping title="Ship From" />
      <AsideSelectShipping title="Ship To" />
      <AsideSelectShipping title="Select Supplier" />
    </aside>
  );
};
export default AsideBar;
