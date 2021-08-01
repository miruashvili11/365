import "./sort.css";
import {sortProducts} from "../../redux/actions/productActions";
import {useDispatch} from "react-redux";
const Sort = () => {
  const dispatch = useDispatch();

  const fillCatalog = (e) => {
    dispatch(sortProducts(e.target.value));
  };
  return (
      <div className={"sort__section"}>
        <select id="sort" onChange={fillCatalog}>
            <option value={'default'}>New Arrivals</option>
            <option value={'asc'} > Price: High To Low</option>
            <option value={'desc'} >Price: Low To High</option>
            <option value={'a_b'} >Alphabetic: high To Low</option>
            <option value={'b_a'} >Alphabetic: Low To High</option>
        </select>
      </div>
  );
};
export default Sort;
