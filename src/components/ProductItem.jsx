import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import AppContext from "@context/AppContext";
import addToCartImg from "@assets/shoppingCart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartImg} alt="addToCartImg" className="AddToCartImg" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
