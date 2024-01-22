import React from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const data = {
  name: "React Course",
  price: 2000 * 100,
  productBy: "doctech",
};

const StripePayment = () => {
  const [product, setProduct] = useState(data);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("response-->", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "grid", placeContent: "center" }}
    >
      <StripeCheckout
        stripeKey="pk_test_51OXILySJDNnBRc8T17NGz7KiNzdNq9sqjeD9COYb4ZKFcmdMByxiAQMslhmbzDmyiUNAdX8v5cyfoO7mcvNmwZtj00m9AHTOzw"
        token={makePayment}
        name="Buy React Course"
        amount={product.price}
        currency="INR"
      >
        <button
          type="button"
          style={{
            color: "whitesmoke",
            backgroundColor: "gray",
            border: "2px solid black",
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          Click here to buy at {product.price / 100}
        </button>
      </StripeCheckout>
    </div>
  );
};

export default StripePayment;
