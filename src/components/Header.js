import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const ShowOrders = (props) => {
  let total = 0;

  props.orders.forEach(el => total += Number.parseFloat(el.price));

  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className="total">Total: {new Intl.NumberFormat().format(total)}$</p>
  </div>)
}

const ShowNothing = () => {
  return (<div className="empty">
    <h2>Cart is empty . . .</h2>
  </div>)
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Home</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-logo ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-modal'>
            {props.orders.length > 0 ? ShowOrders(props) : ShowNothing()}
          </div>
        )}
      </div>
      <div className="bckgnd"></div>
    </header>
  );
}
