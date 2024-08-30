import React from 'react'
import './shop.css'
import Products from './Products'
import { PRODUCTS } from '../product'
export default function Shop() {
  return (
    <div className='shopTitle'>
      <div className="shoptitle">
        <h1>
         pedrotech shop
        </h1>
      </div>
      <div className="products">{PRODUCTS.map (product =>
     (
      <Products data={product}/> 
     )
    )}
      
      </div>
    </div>
  )
}
