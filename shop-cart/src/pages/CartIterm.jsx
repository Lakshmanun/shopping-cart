import React, { useContext } from 'react'
import { Shopcontext } from "../contex/Shop-contex"
export default function CartIterm(props) {
  const { id, productName, price, productImage } = props.data
  const { cartitems, addtocart, removefromcart, updatecartitem } = useContext(Shopcontext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="disciption">
        <p><b>
          {productName}</b></p>
        <p>
          ${price}
        </p>
        <div className="countHandler">
          <button onClick={() => removefromcart(id)}>
            -
          </button>
          <input value={cartitems[id]} onChange={(e) => updatecartitem(Number(e.target.value), id)} />


          <button onClick={() => addtocart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}