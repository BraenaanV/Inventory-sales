import React from "react";
import Stripe from "../pages/StripeContainer";
import { Card, Box } from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Cart(order) {
   
    const rows = [order]
    return (
        <Card>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((x) => (
                <TableRow key={x.key}>
                    <TableCell>{x.itemName}</TableCell>
                    <TableCell>{x.itemQuantity}</TableCell>
                    <TableCell>{x.unitPrice}</TableCell>
                </TableRow>))}
            </TableBody>
            </Table> 
        </Card>

    )
}
export default Cart;
