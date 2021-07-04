import React, { useEffect, useState } from "react";
import axios from "axios";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Sort from "../Header/Sort";
import ProductModal from './ProductModal'
import {SERVER_PRODUCTS} from "../Api";

const Catalog = ({ data, setData,setSelectedItems, selectedItems  }) => {
    const [itemModal, setItemModal] = useState(null);

    useEffect(()=> {
            axios
            .get(SERVER_PRODUCTS)
            .then(res => {
                setData(res.data.data)
                localStorage.setItem("products", JSON.stringify(res.data.data));
                console.log(res)
              })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
        {data.map((product) => (
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
