import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Notification from './Notification';

function CheckoutForm(props) {
  console.log(props.amount)
  const stripe = useStripe();
  const elements = useElements();
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "/stripe/charge",
          {
            amount: props.amount,
            id: id,
          }
        );
        console.log(props.amount)
        console.log(response)

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setNotify({
						isOpen: true,
						message: "Your payment has been processed, thank you for your business!",
						type: "success"
					})
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
      setNotify({
        isOpen: true,
        message: "Something went wrong, please check your payment information and try again.",
        type: "warning"
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button>Pay</button>
      </form>
      <Notification notify={notify} setNotify={setNotify}></Notification>
    </div>
  );
};

export default CheckoutForm;