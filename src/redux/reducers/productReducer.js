import {
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
  PRICE_FILTER,
  SELECTED_PRODUCTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  PRODUCT_LIST,
  CATEGORY_VALUE_CHANGED,
  CART_PRODUCT_UPDATED
} from "../contetnt/actionTypes";
import {productList} from "../actions/productActions";

const initState = {
  products: [],
  allProducts: [],
  productsList: [],
  searchedProducts: [],
  cartProducts: {},
};

export const sortProducts = (sort, data) => {
  if (sort === "asc") {
    data.sort((a, b) => b.price - a.price);
  } else if (sort === "desc") {
    data.sort((a, b) => a.price - b.price);
  } else if (sort === "a_b") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "b_a") {
    data.sort((b, a) => b.title.localeCompare(a.title));
  } else {
    console.log(`404 data error`)
  }
  return data;
};

const searchProducts = (searchValue, data) => {
  return data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.productData,
        allProducts: action.payload.productData,
      };
    // case PRICE_FILTER:
    //   return {
    //     ...state,
    //
    //   }
    case SORT_PRODUCTS:
      return {
        ...state,
        products: sortProducts(action.payload.sortBy, [...state.products]),
        allProducts: sortProducts(action.payload.sortBy, [
          ...state.allProducts,
        ]),
      };
    case PRODUCT_LIST:
      return {
        ...state,
        productsList: productList(action.payload.productListValue , [
            ...state.productsList
        ]),
      }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: searchProducts(action.payload.searchValue, [
          ...state.allProducts,
        ]),
      }
      case CATEGORY_VALUE_CHANGED:
        return {
          ...state,
          categoryValue: action.payload,
        };
      case CART_PRODUCT_UPDATED:
        return {
          ...state,
          cartProducts: action.payload,
        };  
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
