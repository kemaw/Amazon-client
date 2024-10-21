import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { useContext } from "react";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // product = data;
  const { id, title, price, description, image, rating } = product;
  // console.log(id);
  // console.log(product);
  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, price, image, rating, description },
    });
  };
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="name" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/*rating */}
          <Rating readOnly value={rating?.rate} precision={0.1} />
          {/*count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
export default ProductCard;
