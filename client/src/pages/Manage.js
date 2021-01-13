import React, { useState } from "react";
import Button from "@material-ui/core/Button"
import API from "../utils/API"

function Manage() {

    const [newItem, setNewItem] = useState({
        itemName: "",
        description: "",
        inventoryNumber: "",
        price: 1
    })

    const handleChange = e => {
        const { name, value } = e.target
        setNewItem({
            ...newItem,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newItem)
        API.create(newItem)
    }
    
    return (
        <form>
            <h3>Item Name</h3>
            <input 
            type="text"
            name="itemName"
            onChange={handleChange}
            placeholder="Item name"
            />
            <h3>Item Description</h3>
            <input 
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Item description"
            />
            <h3>Inventory Code</h3>
            <input
            type="text"
            name="inventoryNumber"
            onChange={handleChange}
            placeholder="Item description"
            />
            <h3>Price</h3>
            <input
            type="text"
            name="price"
            onChange={handleChange}
            placeholder="Item description"
            />
            <Button onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary">Submit</Button>
        </form>
    )
}

export default Manage;

// value={itemName}
// value={price}
// value={inventoryNumber}
// value={description}