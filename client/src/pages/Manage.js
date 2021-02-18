import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Grid, Button } from "@material-ui/core"
import DeleteButton from "../components/DeleteButton"
import { Link, Route } from "react-router-dom";
import CreateForm from "../components/CreateForm";
import EditForm from "../components/EditForm";

function Manage(props) {
    
    // const [status, setStatus] = useState(true)

    useEffect(() => {
        getData()
    }, [])
    
    const getData = () => {
        API.findAll()
        .then(res => setState(res.data))
        .catch(err => console.warn(err))
    }

    const [currentInv, setState] = useState([])

    const [selectedItem, setSelectedItem] = useState({
        _id: "",
        itemName: "",
        description: "",
        inventoryNumber: "",
        price: "",
        image: ""
    })

    const [newItem, setNewItem] = useState({
        itemName: "",
        description: "",
        inventoryNumber: "",
        price: "",
        image: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setNewItem({
            ...newItem,
            [name]: value
        })
    }

    const handleEditChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setSelectedItem({
            ...selectedItem,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await API.create(newItem)
        setNewItem({
            itemName: "",
            description: "",
            inventoryNumber: "",
            price: "",
            image: ""
        })
        getData()
        // setStatus(true)
    }

    const handleImageChange = (url) => {
        setSelectedItem({
            ...selectedItem,
            image: url
        })
    }
    const setNewImage = (url) => {
        setNewItem({
            ...newItem,
            image: url
        })
    }

    const handleEditSubmit = async e => {
        e.preventDefault();
        console.log(selectedItem)
        await API.update(selectedItem)
        setSelectedItem({
            _id: "",
            itemName: "",
            description: "",
            inventoryNumber: "",
            price: "",
            image: ""
        })
        getData()
    }

    const handleDelete = async (id) => {
        await API.remove(id)
        getData()
    }

    const handleEdit = id => {
        console.log(id)
        const editedID = currentInv.find(x => {
            return x._id === id
        })
        setSelectedItem({
            ...editedID
        })
        console.log(editedID)
        // API.update(id)
    }
    
    return (
        <div>
            <Link to={`${props.match.url}/create`}>
            <Button
            color="primary"
            variant="contained"
            >Add New Item</Button></Link>
            <Link to="/"><Button
            color="primary"
            variant="contained"
            >Order</Button></Link>
            <Route exact path={`${props.match.url}/create`}
            render={(props) => (
                <CreateForm 
                itemName={newItem.itemName}
                description={newItem.description}
                inventoryNumber={newItem.inventoryNumber}
                price={newItem.price}
                image={newItem.image}
                handleChange={handleChange}
                handleSubmit={handleSubmit} 
                handleImageChange={setNewImage} />
                )}
                />

            <Route exact path={`${props.match.url}/edit`}
            render={(props) => (
                <EditForm 
                id={selectedItem._id}
                itemName={selectedItem.itemName}
                description={selectedItem.description}
                inventoryNumber={selectedItem.inventoryNumber}
                price={selectedItem.price}
                image={selectedItem.image}
                handleChange={handleEditChange}
                handleSubmit={handleEditSubmit}
                handleImageChange={handleImageChange} />
            )}
            />

        <Grid container spacing={3}>
        {
            currentInv.map((x, i) => 
            <DeleteButton 
            key={i + '-item'} 
            x={x}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />)
        }
        </Grid> 
        </div>
    )
}

export default Manage;

// value={itemName}
// value={price}
// value={inventoryNumber}
// value={description}

// itemName={newItem.itemName}


// component={CreateForm}
// handleChange={handleChange}
// handleSubmit={handleSubmit}