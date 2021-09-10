import React,{useContext, useState} from "react"
import CartItems from "../component/CartItems"
import { Context } from "../Context"

function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const [isPlacing, setIsPlacing] = useState(false)
    const carItemsElement = cartItems.map(item=> 
        <CartItems key={item.id}  item={item}/>)

    const totalCost = cartItems.length * 2.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})



const placeOrder= ()=>{
    
    setIsPlacing(true)
    setTimeout(()=>{setIsPlacing(false);
        console.log("Order placed!");
         setCartItems([])
        }, 3000);

}

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {carItemsElement}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            { (cartItems.length>0)?
            <div className="order-button">
                <button onClick={placeOrder}>{ isPlacing ? "Ordering...." : "Place Order"}</button>
            </div>
             : <p>You have no items in the cart</p>
                }
        </main>
    )
}

export default Cart