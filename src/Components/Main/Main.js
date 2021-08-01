import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../../redux/actions/productActions";

const Main = ({ data, setData, setSelectedItems,selectedItems}) => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const [idArray, setIdArray] = useState([])

  return (
    <main className="main">
      <Catalog
        data={data}
        setData={setData}
        idArray={idArray}
        products={products}
        setIdArray={setIdArray}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
    </main>
  );
};

export default Main;
