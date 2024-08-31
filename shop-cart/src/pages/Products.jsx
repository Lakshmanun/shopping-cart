import React from 'react'
function Products(props) { 
    const{id,productName,price,productImage}=props.data
  return (
  <div className="product">
     <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div> 
     <button className="addToCartBttn">
     <b> Add To Cart</b>
     </button>
  </div>
  )
}

export default Products
