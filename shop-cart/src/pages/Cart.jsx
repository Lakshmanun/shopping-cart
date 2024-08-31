import { useContext } from 'react'
import "./cart.css";
import { Shopcontext } from "../contex/Shop-contex"
import { PRODUCTS } from '../product';
import CartIterm from './CartIterm';


export default function Cart() {

  const { cartitems ,gettotalcartamout } = useContext(Shopcontext)
const totalamount =gettotalcartamout()
  return (
    <div className='cart'>
      <div className="cartcainter">
        <h1> your cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((Product) => {
          if (cartitems[Product.id] !== 0) {
            return <CartIterm data={Product} />
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: $ {totalamount}</p>
        <button>
          continue shopping
        </button>
        <button>
          checkout
        </button>
      </div>
    </div>
  )
}
