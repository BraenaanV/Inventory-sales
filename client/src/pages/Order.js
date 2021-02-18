import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import { Grid, Card, CardContent, Typography } from "@material-ui/core"
import CardMedia from '@material-ui/core/CardMedia';
import AddToCart from "../components/AddToCart";
import Stripe from "../pages/StripeContainer";
// import Cart from "../components/Cart"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    tableHead: {
        background: "#00bcd4",
    },
    summary: {
        textAlign: "right",
        paddingRight: 100,
        paddingTop: 10,
    },
    lineItem: {
        fontWeight: "bold",
    },
  });

function Order() {
    const classes = useStyles();

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
                state.inventory.map((x, i) => 
                <Grid key={i + '-item'} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <CardMedia
                            className={classes.media}
                            image={x.image}/>
                            <Typography>{x.itemName}</Typography>
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
            <Grid item xs={12}>
                <Card>
                    <Table>
                    <TableHead
                    className={classes.tableHead}
                    >
                    <TableRow>
                        <TableCell>ORDER SUMMARY</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        Object.values(state.cart).map((x, i) => <TableRow key={i + "-cart-item"}>
                        <TableCell>{x.itemName}</TableCell>
                        <TableCell>{x.quantity}</TableCell>
                        <TableCell>{(x.price).toFixed(2) * x.quantity}</TableCell>
                    </TableRow>)
                    }
                    </TableBody>
                </Table>
                <div className={classes.summary}>
                <Typography className={classes.lineItem}>Price: ${(state.cost).toFixed(2)}</Typography>
                <Typography className={classes.lineItem}>Tax: ${state.tax}</Typography>
                <Typography className={classes.lineItem}>Total Cost: ${state.totalPrice}</Typography>
                </div>
                <br></br>
                <hr></hr>
                <Stripe
                amount={state.totalPrice * 100}
                ></Stripe>
                </Card>
            </Grid>


            <Grid item xs={12}>
                
            </Grid>

                </>
            }
            </Grid>
        </div>
    )
}

export default Order;






// {/* <Grid item xs={12} sm={6} md={4}>{
//     Object.values(state.cart).map((x, i) => 
//         <Cart 
//         key={i + "-cart-item"}
//         itemName={x.itemName}
//         itemQuantity={x.quantity}
//         unitPrice={(x.price).toFixed(2) * x.quantity}
//         preTax={(state.cost).toFixed(2)}
//         tax={state.tax}
//         finalPrice={state.totalPrice}
//         stripePrice={state.totalPrice * 100}
//         />
//         )
// }
//  </Grid> */}





// <Grid item xs={12}>
// <Card>
//     <Table>
//     <TableHead>
//     <TableRow>
//         <TableCell>Item</TableCell>
//         <TableCell>Quantity</TableCell>
//         <TableCell>Price</TableCell>
//     </TableRow>
//     </TableHead>


// {
//     Object.values(state.cart).map((x, i) => <div key={i + "-cart-item"}>
//     {x.itemName} X {x.quantity} = {(x.price).toFixed(2) * x.quantity}
// </div>)
// }
// <Typography>Price: ${(state.cost).toFixed(2)}</Typography>
// <Typography>Tax: ${state.tax}</Typography>
// <Typography>Total Cost: ${state.totalPrice}</Typography>

// </Table>
// </Card>
// </Grid>