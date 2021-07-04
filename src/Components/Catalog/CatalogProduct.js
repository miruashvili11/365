import React, {useEffect, useState} from "react";
import CatalogHead from "./CatalogHead";
import './catalog.css'

const CatalogProduct = ({ image, title, price, id, handleOpen, description, selectedItems, setSelectedItems }) => {

    const handleCheckbox = () => {
        setSelectedItems([id, ...selectedItems]);
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        }
    };

    const productClicked = () => {
        handleOpen({id, image, title, price, description})
    }
    return (
        <div
            className={`catalog__product ${
                selectedItems.includes(id) ? "catalog__product--border" : ""
            }`}
        >
        <CatalogHead
            handleCheckbox={handleCheckbox}
            selectedItems={selectedItems}
            id={id}
        />
        <div className="catalog__photo" onClick={productClicked}>
            <img src={image} />
        </div>
        <div className="catalog__title">{title}</div>
            <div className="prices">
                <div>
                    <p>$20</p>
                    <p>RRP</p>
                </div>
                <div>
                    <p>${price}</p>
                    <p>COST</p>
                </div>
                <div className="profit">
                    <p>20%($6)</p>
                    <p>PROFIT</p>
                </div>
            </div>
    </div>
    );
  };
  export default CatalogProduct;

