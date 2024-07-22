import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { CartLineItem } from "./CartLineItem";

export const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div>Total Items: {totalItems}</div>
      <div>Total Price: {totalPrice}</div>
      <button disabled={!totalItems} onClick={onSubmitOrder}>
        Submit Order
      </button>
    </>
  );

  const content = <main>{pageContent}</main>;

  return content;
};
