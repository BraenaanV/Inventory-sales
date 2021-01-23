import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import { Grid, Card, CardContent, Typography, Button, Box } from "@material-ui/core"
import AddToCart from "../components/AddToCart";
import Stripe from "../pages/StripeContainer";
import CheckoutForm from "../components/CheckoutForm";

function Order() {
    const [state, setState] = useState({
        inventory: [],
        cart: {},
        totalPrice: 0,
        cost: 0,
        tax: 0
    })

    useEffect(() => {
        API.findAll()
            .then(res => setState(state => ({ ...state, inventory: res.data })))
            .catch(err => console.warn(err))
    }, [])

    const addItem = item => {
        if (!state.cart[item._id]) {
            const cart = {
                ...state.cart,
                [item._id]: {
                    ...item,
                    quantity: 1
                }
            }

            return setState({
                ...state,
                cart,
                ...calculateTotalCost(cart)
            })
        }
        const cart = {
            ...state.cart,
            [item._id]: {
                ...item,
                quantity: state.cart[item._id].quantity + 1
            }
        }

        setState({
            ...state,
            cart,
            ...calculateTotalCost(cart)
        })
    }

    const calculateTotalCost = (cart) => {
        const items = Object.values(cart)
        console.log(items)
        let cost = items.reduce((_cost, x) => _cost += x.price * x.quantity, 0)

        return {
            cost,
            tax: (cost * .0675).toFixed(2),
            totalPrice: (cost * 1.0675).toFixed(2)
        }
    }

    return (
        <div>
            <Grid container spacing={3}>{
                state.inventory.map((x, i) => <Grid key={i + '-item'} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography><h2>{x.itemName}</h2></Typography>
                            <Typography>{x.description}</Typography>
                            <AddToCart
                                addItem={addItem}
                                item={x}
                            />
                        </CardContent>
                    </Card>
                </Grid>)
            }
            {!!state.tax && <>
                <Grid item xs={12}>{
                    Object.values(state.cart).map((x, i) => <div key={i + "-cart-item"}>
                        {x.itemName} X {x.quantity} = {(x.price).toFixed(2) * x.quantity}
                    </div>)
                }
                    <Typography>Price: ${(state.cost).toFixed(2)}</Typography>
                    <Typography>Tax: ${state.tax}</Typography>
                    <Typography>Total Cost: ${state.totalPrice}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stripe
                    amount={state.totalPrice * 100}
                    ></Stripe>
                </Grid>
                </>}
            </Grid>
        </div>
    )
}

export default Order;
// {!!state.tax && <>
// <Grid item xs={12}>{
//     Object.values(state.cart).map((x, i) => <div key={i + "-cart-item"}>
//         {x.itemName} X {x.quantity} = {(x.price).toFixed(2) * x.quantity}
//     </div>)
// }
//     <Typography>Price: ${(state.cost).toFixed(2)}</Typography>
//     <Typography>Tax: ${state.tax}</Typography>
//     <Typography>Total Cost: ${state.totalPrice}</Typography>
// </Grid>
// <Grid item xs={12}>
//     <Stripe
//     amount={state.totalPrice * 100}
//     ></Stripe>
// </Grid>
// </>}