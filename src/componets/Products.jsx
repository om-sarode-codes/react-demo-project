import React from "react";
import "../product.css";
import { Link } from 'react-router-dom'


const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-infos">
                <img src={props.image} alt={props.title} />

        <div className="product-info">
          <h3>{props.title}</h3>
          <p>₹{props.price}</p>
        </div>
        <div className="btn">
          <button>add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;