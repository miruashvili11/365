import './Profile.css'
import { cart } from '../Components/Api'
import { useEffect, useState } from 'react'
import CatalogProduct from '../Components/Catalog/CatalogProduct'
import { removeFromCart } from '../Components/Api'
// import { useSnackbar } from "notistack";
const Inventory = ({ selectedItems, setSelectedItems }) => {
  const [cartProduct, setCartProducts] = useState([])
  // const { enqueueSnackbar } = useSnackbar()
  const getCartProducts = async () => {
    const result = await cart()
    if (result) setCartProducts(result.cartItem.items)
  }

  useEffect(() => {
    getCartProducts()
  }, [])

  const remove = (id) => {
    removeFromCart(id)
    // enqueueSnackbar(`item removed from cart.`, { variant: "info" });
  }

  return (
    <section className="catalog">
      {cartProduct &&
        cartProduct.map((product) => (
          <>
            <CatalogProduct
              {...product}
              product={product}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </>
        ))}
    </section>
  )
}
export default Inventory
