import ProductList from '../Components/Main/ProductList'
import './Profile.css'
const Stores = () => {
  document.title = 'Product Lists'

  return (
    <div className={'Stores'}>
      <ProductList />
    </div>
  )
}

export default Stores
