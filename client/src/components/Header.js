import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button';
import bannerImage from "../assets/bannerImage.jpg"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  banner: {
    height: "450px",
    
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
      history.push("/login")
  }
  const handleRedirect = () => {
      history.push("/manage")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ice Cream
          </Typography>
          {props.isLoggedIn ?
          <Button onClick={handleRedirect} color="inherit">Manage</Button>
          :
          <Button onClick={handleClick} color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center">
        <img className={classes.banner} src={bannerImage} alt="Ice Cream"></img>
      </Box>
    </div>
  );
}