import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles({ 
    container: { backgroundColor: "blue" },
    padding: { paddingTop: "50px"  }
})

function Header() {
    const classes = useStyles()
    return (
        <Grid container classes={{ container: classes.container }}>
            <Grid item xs={8}>
                <h1>ICE CREAM!</h1>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="primary" classes={{ padding: classes.padding}}>Log-in</Button>
            </Grid>
        </Grid>
    )
}

export default Header;