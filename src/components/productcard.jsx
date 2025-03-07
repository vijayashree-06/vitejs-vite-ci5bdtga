// write product card here
/* cart/productcard.jsx */
import React from "react";
import Button from "../components/button"; // Importing the Button component
import "./productcard.css"; // Importing CSS file for styling

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  const handleViewProduct = () => {
    alert("Viewing Product: " + productName);
  };

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <Button onClick={handleViewProduct} />
    </div>
  );
};

export default Productcard;
