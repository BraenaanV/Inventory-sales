import React from "react";
import { Grid, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function DeleteButton(props) {
    const handleClick = () => {
        props.handleDelete(props.x._id)
    }
    const handleEdit = () => {
        props.handleEdit(props.x._id)
    }
    return (
    <Grid item xs={12} sm={6} md={4}>
    <h3>{props.x.itemName}</h3>
    <Button
    variant="contained"
    color="secondary"
    onClick={handleClick}
    >Delete</Button>
    <Link to={`/manage/edit`}>
    <Button
    variant="contained"
    color="primary"
    onClick={handleEdit}
    >Edit</Button></Link>
</Grid>
)
}