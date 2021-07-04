import "./search.css";
import {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';


const Search = ({searchQuery, setSearchQuery, setData
}) => {

  const [finalsearch, setFinalsearch] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const search = () => {
    setFinalsearch(searchQuery);
  };
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    const res = products.filter((e) => {
      return e.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setData(res);
  }, [finalsearch]);

  return (
    <div classNameName={"Search"}>
      <input  className={"Search__input"} type={"search"} placeholder={"Search"} value={searchQuery} onChange={handleChange}/>
      <button  className={"Search__Btn"} type={"submit"} onClick={search}>
        < SearchIcon className={'Search__Btn--Icon'}/>
      </button>
    </div>
  );
};

export default Search;
