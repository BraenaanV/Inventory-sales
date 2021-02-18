import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


export default function CircularIndeterminate(props) {
  const classes = useStyles();
  const { load, setLoad } = props;

  const handleClose = (event) => {
    setLoad({
      ...load,
      isOpen: false
    })
  }

  return (
    <div className={classes.root}>
      <Snackbar
        className={classes.root}
        open={load.isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
        <CircularProgress />
      </Snackbar>

    </div>
  );
}