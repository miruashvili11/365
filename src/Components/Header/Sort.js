import "./sort.css";
const Sort = ({ data, setData }) => {
  const sortProduct = (e) => {

    const sortResult = [...data];
    const sorted = sortResult;

    const sort = e.target.value;
    if (sort === "asc") {
      sorted.sort((a, b) => b.price - a.price);
      setData(sorted);
    } else if (sort === "desc") {
      sorted.sort((a, b) => a.price - b.price);
      setData(sorted);
    } else if (sort === "a_b") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      setData(sorted);
    } else if (sort === "b_a") {
      sorted.sort((b, a) => b.title.localeCompare(a.title));
      setData(sorted);
    } else {
      console.log(`404 data error`)
    }
  };


  return (
      <div className={"sort__section"}>
        <select id="sort" onChange={sortProduct}>
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
