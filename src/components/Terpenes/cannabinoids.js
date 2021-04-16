import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  title: {
    fontSize: "34px",
    color: "#D0E678",
  }
}));

export default function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment  className="popup">
      <Button onClick={handleClickOpen} className={classes.title}>
        Cannabinoids
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        className="popup"
      >
        <Container maxWidth="sm" id="max-width-dialog-title"  className="popuptitle">Cannabinoids</Container>
        <DialogContent  className="popup">
          <DialogContentText className="popup"> 
            Cannabinoids are chemical compounds that act on receptors in the human body delivering pysochoactive, balancing, and harmonizing effects.
          </DialogContentText>
          <DialogContentText className="popup">
            THC and CBD are just 2 of 65 Cannabinoids.
          </DialogContentText>
        </DialogContent>
        <DialogActions  className="popup">
          <Button onClick={handleClose} className="popup">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}