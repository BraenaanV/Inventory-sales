import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
    </div>
  );
}