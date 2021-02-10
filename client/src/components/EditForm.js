import React from "react";
import { Button } from "@material-ui/core";
import ImagePicker from "./ImagePicker";

function EditForm (props) {
    return (
        <form>
            <input type="hidden" value={props._id}></input>
            <h1>Edit Your Item</h1>
            <h3>Item Name</h3>
            <input 
            type="text"
            name="itemName"
            value={props.itemName}
            onChange={props.handleChange}
            placeholder="Item Name"
            />
            <h3>Item Description</h3>
            <input 
            type="text"
            name="description"
            value={props.description}
            onChange={props.handleChange}
            placeholder="Item description"
            />
            <h3>Inventory Code</h3>
            <input
            type="text"
            name="inventoryNumber"
            value={props.inventoryNumber}
            onChange={props.handleChange}
            placeholder="Inventory Code"
            />
            <h3>Price</h3>
            <input
            type="text"
            name="price"
            value={props.price}
            onChange={props.handleChange}
            placeholder="Item price"
            />
            <h3>Image</h3>
            <input
            type="text"
            name="image"
            value={props.image}
            onChange={props.handleChange}
            placeholder="Item image"
            />
            <ImagePicker 
            handleChange={props.handleImageChange}
            selectedImage={props.image}
            />
            <br></br>
            <Button onClick={props.handleSubmit}
            type="submit"
            variant="contained"
            color="primary">Submit</Button>
        </form>
    )
}

export default EditForm;