import './CatalogHead.css'
import CheckBox from './CheckBox'
import Button from "../Header/Button";
import {addToCart} from "../Api";

const SelectProduct = ({ selectedItems, handleCheckbox, id,}) => {
    return (
        <>
        <div
            className={`catalog__head ${
                selectedItems.includes(id) ? "catalog__head--active" : ""
            }`}
        >
            <CheckBox
                handleCheckbox={handleCheckbox}
                id={id}
                isChecked={selectedItems.includes(id)}
            />
            <span onClick={() =>{ addToCart(id,1)}} >
                <Button content="add to inventory" className={"addToInventory--hover"}/>
            </span>
        </div>
            </>
    );
};
export default SelectProduct;
