import React from 'react'
import './ProductList.css'

const ProductList = () => {
  const products = JSON.parse(localStorage.getItem('products' + []))
  const productResult = products.length
  console.log(productResult)

  return (
    <>
      <center>
        {products.map((product) => (
          <div className="Products">
            <table>
              <tr>
                <th>Id</th>
                <th>Iamge</th>
                <th>Title</th>
                <th>Price </th>
                <th>Quantity</th>
              </tr>

              <tr>
                <td>{product.id}</td>
                <td><img style={{width: '50px', height: '50px'}} src={product.imageUrl} alt="image" /></td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>0</td>
              </tr>
            </table>
            {/* <center>
          <table class="content-table">
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>title</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>{product.id}</td>
                <td><img style={{width: '80px', height: '40px'}} src={product.imageUrl} alt="image" /></td>
                <td>{product.title}</td>
                <td>{product.price + '$'}</td>
              </tr>
            </tbody>
          </table>
          </center> */}
          </div>
        ))}
      </center>
    </>
  )
}

export default ProductList
