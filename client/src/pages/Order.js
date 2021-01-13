import React from 'react'
import API from '../utils/API'
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core"

function Order() {
    const [state, setState] = React.useState({
        inventory: []
    })

    React.useEffect(() => {
        // (async () => {
        //     try {
        //         const res = await API.findAll()
        //         setState(state => ({ ...state, inventory: res.data }))
        //     } catch (error) {
        //         console.warn(error)
        //     }
        // })()

        API.findAll()
            .then(res => setState(state => ({ ...state, inventory: res.data })))
            .catch(err => console.warn(err))
    }, [])

    console.log(state.inventory)
    return (
        <div>
            {/* {inventory.map(x => 
            <Card style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title>{x.itemName}</Card.Title>
                    <Card.Text>{x.description}</Card.Text>
                    <Button>${x.price}</Button>
                </Card.Body>
            </Card>
            )} */}


            <Grid container spacing={3}>
                {
                    state.inventory.map((x, i) => <Grid key={i + '-item'} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography>{x.itemName}</Typography>
                                <Typography>{x.description}</Typography>
                                <Button variant="contained" color="secondary">${x.price}</Button>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>

        </div>
    )
}

export default Order;