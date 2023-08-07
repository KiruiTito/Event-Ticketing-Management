import React, { useState, useEffect } from "react";

function Cart({ cartItems, onGoBack, setSelectedTicketQuantity }) {
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setTicketQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setSelectedTicketQuantity(ticketQuantity); // Update selectedTicketQuantity in the parent component
    }
  }, [cartItems, setSelectedTicketQuantity, ticketQuantity]);

  // Calculate the total price for each item in the cart
  const calculateItemTotalPrice = (item) => {
    const ticketPrice = parseFloat(item.ticketPrice.replace("ksh", ""));
    return (ticketPrice * item.ticketQuantity).toFixed(2);
  };

  // Calculate the overall total price for all items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemTotalPrice = parseFloat(item.ticketPrice.replace("ksh", "")) * item.ticketQuantity;
      totalPrice += itemTotalPrice;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h3>{item.eventTitle}</h3>
            <p>{item.ticketType}</p>
            <p>Price: {item.ticketPrice}</p>
            <p>Total Price: {calculateItemTotalPrice(item)} ksh</p>
            <div className="quantity-controls">
              <button className="quantity-button" onClick={handleDecrementQuantity}>
                -
              </button>
              <span className="quantity">{item.ticketQuantity}</span>
              <button className="quantity-button" onClick={handleIncrementQuantity}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="overall-total">Overall Total: {calculateTotalPrice()} ksh</p>
      <button className="button" onClick={onGoBack}>
        Clear Cart
      </button>
      <button className="button" > Proceed to payment</button>
      {/* <button className="button" onClick={() => handleConfirmPayment()}>
        Confirm Payment
      </button> */}
    </div>
  );
}

export default Cart;
