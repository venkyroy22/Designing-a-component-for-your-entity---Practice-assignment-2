// write product card here
import React from "react";
import "../App.css"
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage = "https://cricketerboutique.com/wp-content/uploads/2020/08/MRF-Virat-Kohli-Grand-Edition-Cricket-Bat.jpg.webp";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div class="dv">
      <img class="img" src={productImage} alt={productName}  />
      <h2 >{productName}</h2>
      <p >{productPrice}</p>
      <div >
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
