import { createContext, useState } from 'react'
import { PRODUCTS } from '../product';

export const Shopcontext = createContext(null);

const getDefaultcart = () => {

    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};
//  --------------------------------------context provider-----------

export default function ShopcontextProvider(props) {

    
    const [cartitems, setcartitems] = useState(getDefaultcart());


// -------------------------------------------funtion for add cart------------
    const addtocart = (itemid) => {
        setcartitems((prev) => ({
            ...prev, [itemid]: prev[itemid] + 1

        }))
    };
// 

    const updatecartitem = (newamount, itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: newamount }));
    }
// /----------------------------------------------funtion for remove cart-------------
    const removefromcart = (itemid) => {
        setcartitems((prev) => ({
            ...prev, [itemid]: prev[itemid] - 1

        }))
    };
// ------------------------------------------------funtion for get total-----------
    const gettotalcartamout = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalamount += cartitems[item] * itemInfo.price
            }
        }
        return totalamount;
    };
    //  ------------------------------------------- contextvalue----------------

    const contextvale = {
        cartitems, addtocart, removefromcart, updatecartitem, gettotalcartamout
    }

    return (
        <Shopcontext.Provider value={contextvale}>
            {props.children}
        </Shopcontext.Provider>
    )
}
