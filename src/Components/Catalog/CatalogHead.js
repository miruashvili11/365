import React from 'react'
import './CatalogHead.css'
import CheckBox from './CheckBox'
import Button from '../Header/Button'

import {
  addToCart,
  deleteProduct,
  getCart,
  getProducts,
} from "../Api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useSnackbar } from "notistack";
import { getProductsAction } from "../../redux/actions/productActions";
import { editModalOpenAction } from "../../redux/Modal/ModalAction";



const SelectProduct = ({ selectedItems, handleCheckbox, id }) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { enqueueSnackbar } = useSnackbar();
  const dispach = useDispatch();
  const addCart = async () => {
    addToCart(id, 1)
      .then(() => {
        let variant = "success";
        enqueueSnackbar("product added!", { variant });
      })
      .catch((err) => {
        let variant = "error";
        enqueueSnackbar("product add failed", { variant });
      });
  };
  const editClick = () => {
    dispach(editModalOpenAction(id));
  };
  const deleteprod = async () => {
    await deleteProduct(id);
    await getProducts()
      .then((result) => {
        dispach(getProductsAction(result));
      })
      .then(() => {
        let variant = "success";
        enqueueSnackbar("product deleted successfully", { variant });
      })
      .catch((err) => {
        let variant = "error";
        enqueueSnackbar("delete product failed", { variant });
      });
  };


  return (
    <>
      <div
        className={`catalog__head ${
          selectedItems.includes(id) ? 'catalog__head--active' : ''
        }`}
      >
        <CheckBox
          handleCheckbox={handleCheckbox}
          id={id}
          isChecked={selectedItems.includes(id)}
        />
        <span
          onClick={() => {
            addToCart(id, 1)
          }}
        >
          <div className="catalog__hover-button">
            {user && user.isAdmin && (
              <>
                <EditIcon style={{ color: '#61d5df' }} onClick={editClick} />
                <DeleteIcon style={{ color: '#61d5df' }} onClick={deleteprod} />
              </>
            )}
          </div>
          <Button
            content="add to inventory"
            className={'addToInventory--hover'}
          />
        </span>
      </div>
    </>
  )
}
export default SelectProduct
