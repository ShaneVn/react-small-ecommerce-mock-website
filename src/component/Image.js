import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hook/useHover";


function Image({ className, img }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const [isHover, ref] = useHover();
  // for toggleFavrotie, img.id is the id of that specific image div. When you click the heart icon
  //  then it will map through the allphotos state in Context,to find out which isFavorite property should be changed
  //  it will return a new state, then Photos component will rerender, then Image will rerender to show the heart
  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHover) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }
  const CartIcon = isHover && (
    <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
  );

  function cartIcon() {
    if (cartItems.some((ele) => ele.id === img.id)) {
      return (
        <i
          onClick={() => removeFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (isHover) {
      return (
        <i
          onClick={() => addToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div
      ref= {ref}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}

      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
  className: PropTypes.string,
};

export default Image;
