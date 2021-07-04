import "./AsideSelectProduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AsideSelectProduct = ({ title, allData, setData }) => {
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const history = useHistory();
  const getCategories = async () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  };

  const handleCategorySelect = (category) => {
    history.push(`/catalog/${category}`);
    setSelectedCategory(category);
  };

  const filterByCategory = (items, choosenCategory) => {
    setData(
      items.filter(
        (product) =>
          product.category.toLowerCase() === choosenCategory.toLowerCase()
      )
    );
  };

  useEffect(() => {
    getCategories();
  }, []);


  useEffect(() => {
    if (allData) filterByCategory(allData, selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      className={"select-product__wrapper select-product__wrapper--" + title}
    >
      <select
        className={"select-product__options select-product__options--" + title}
      >
        <option onClick={() => handleCategorySelect("")}>Choose {title}</option>
        {categories.length &&
          categories.map((category) => (
            <option onClick={() => handleCategorySelect(category)}>
              {category}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AsideSelectProduct;
