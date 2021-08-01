import API from "../../API";
import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  SEARCH_PRODUCTS,
  PRICE_FILTER,
  SELECTED_PRODUCTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  PRODUCT_UPDATED,
  CATEGORY_VALUE_CHANGED,
  CART_PRODUCT_UPDATED,
  PRODUCT_LIST
} from "../contetnt/actionTypes";

export const getProducts = () => async (dispatch) => {
  const productApi = API("api/v1/products");
  const product = await productApi.get();
  dispatch({
    type: GET_PRODUCTS,
    payload: {
      productData: product.data.data,
    }
  })
}

export const searchProducts = (searchValue) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchValue,
    }
  }
}

export const getProductsAction = (products) => {
  return {
    type: PRODUCT_UPDATED,
    payload: products,
  };
};

export const productList = (productListValue) => {
  return {
    type: PRODUCT_LIST,
    payload: {
      productListValue,
    }
  }
}

export const priceFilter = (priceValue) => {
  return {
    type: PRICE_FILTER,
    payload: {
      priceValue,
    }
  }
}

export const selectProducts = (selectValue) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: {
      selectValue,
    }
  }
}


export const sortProducts = (sortValue) => {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sortBy: sortValue,
    }
  }
}

export const changeCategoryValueAction = (value) => {
  return {
    type: CATEGORY_VALUE_CHANGED,
    payload: value,
  };
};

export const getCartProductsAction = (products) => {
  return {
    type: CART_PRODUCT_UPDATED,
    payload: products,
  };
};