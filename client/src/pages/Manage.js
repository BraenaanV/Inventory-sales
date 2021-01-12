import React from "react";

function Manage() {
    return (
        <form>
            <h3>Item Name</h3>
            <input type="text" name="name" placeholder="Item name" />
            <h3>Item Description</h3>
            <input type="text" name="description" placeholder="Item description" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Manage;