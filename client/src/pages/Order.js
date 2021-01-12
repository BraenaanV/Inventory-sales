import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const inventory = [
    {
        itemName: "Chocolate Ice Cream",
        inventoryNumber: "CIC1",
        description: "A delicious treat!",
        price: 4.99
    },
    {
        itemName: "Vanilla Ice Cream",
        inventoryNumber: "VIC1",
        description: "Old Faithful",
        price: 3.99
    }
];

function Order() {
    return (
        <div>
            {inventory.map(x => 
            <Card style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title>{x.itemName}</Card.Title>
                    <Card.Text>{x.description}</Card.Text>
                    <Button>${x.price}</Button>
                </Card.Body>
            </Card>
            )}
        </div>
    )
}

export default Order;