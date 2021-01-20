import React from "react";
import { Grid, Button } from "@material-ui/core";

export default function EditButton(props) {

    return (
        <Grid item xs={12} sm={6} md={4}>
        <h3>{props.x.itemName}</h3>
        </Grid>
    )
}