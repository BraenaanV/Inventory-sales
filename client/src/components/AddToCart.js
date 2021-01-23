import react from "react";
import { Button } from "@material-ui/core";

function AddToCart(props) {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => props.addItem(props.item)}
            >${props.item.price}</Button>
        </div>
    )
}

export default AddToCart;