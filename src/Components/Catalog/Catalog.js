import React, { useEffect, useState } from "react";
import axios from "axios";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Sort from "../Header/Sort";
import ProductModal from './ProductModal'
import {SERVER_PRODUCTS} from "../Api";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../Api'
import { getProductsAction } from "../../redux/actions/productActions";

const Catalog = ({ data, setData,setSelectedItems, selectedItems,products  }) => {
    const [itemModal, setItemModal] = useState(null);
    const productList = useSelector((state) => state.data.productList);

  const dispach = useDispatch();

  useEffect(() => {
    getProducts().then((result) => {
      dispach(getProductsAction(result));
    });
  }, []);
  

    const handleOpen = (data) => {
        setItemModal(data);
    }

    const handleClose = () => {
        setItemModal(null);
    }

    return (
      <>
      <div className="Catalog">
        <Sort data={data} setData={setData} />
      </div>
      <section className="catalog">
        {productList && productList.map((product) => (
          <CatalogProduct
            price={product.price}
            title={product.title}
            image={product.imageUrl}
            description={product.description}
            id={product.id}
            handleOpen={handleOpen}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
          {itemModal && <ProductModal product={itemModal} handleClose={handleClose}/>}
      </section>
      </>
  );
};
export default Catalog;
