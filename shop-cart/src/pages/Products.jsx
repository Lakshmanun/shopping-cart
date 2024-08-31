import React, { useContext } from 'react'
import { Shopcontext } from "../contex/Shop-contex"
function Products(props) {
  const { id, productName, price, productImage } = props.data
  const { addtocart, cartitems } = useContext(Shopcontext)
  const cartitemamount = cartitems[id]
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addtocart(id)}>
        <b> Add To Cart</b>{cartitemamount > 0 && <>({cartitemamount}) </>}
      </button>
    </div>
  )
}

export default Products
