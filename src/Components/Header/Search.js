import "./search.css";
import {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import {searchProducts} from "../../redux/actions/productActions";


const Search = ({searchQuery, setSearchQuery, setData
}) => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchProducts(input))
  };

  return (
    <div classNameName={"Search"}>
      <form onChange={handleChange}>
        <input  className={"Search__input"} type={"search"} placeholder={"Search"} value={input} onChange={(e) => setInput(e.target.value)}/>
        <button  className={"Search__Btn"} type={"submit"}>
          < SearchIcon className={'Search__Btn--Icon'}/>
        </button>
      </form>
    </div>
  );
};

export default Search;
