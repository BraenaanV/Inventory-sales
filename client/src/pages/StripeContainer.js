import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const PUBLIC_KEY = "pk_test_51I6oUQDmnzdI6OONkNMu0i9fqGa6nxzXtoemkPjW3cHCd1OG82cEEZsTSwHjqFdclU9kuZkfxXHFBsrlMwaBxQXI00NZy5WMjU";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm 
      amount={props.amount}
      />
    </Elements>
  );
};

export default Stripe;