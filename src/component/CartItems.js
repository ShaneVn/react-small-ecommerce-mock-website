import React, { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hook/useHover";

// removefromcart is a method use filter to delete a specific image from the array,
// it is imported from Context

function CartItems({ item }) {
  // const [isHovered, SetIsHovered] = useState(false)
  const [ishover, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => removeFromCart(item.id)}
        className={ishover ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
      ></i>
      <img src={item.url} width="130px" />
      <p>$2.99</p>
    </div>
  );



}


CartItems.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItems;
