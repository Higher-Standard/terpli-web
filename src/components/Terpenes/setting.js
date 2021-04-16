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
      Environment 
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        className="popup"
      >
        <Container maxWidth="sm" id="max-width-dialog-title"  className="popuptitle">Environment</Container>
        <DialogContent  className="popup">
          <DialogContentText className="popup"> 
            1)  How you are feeling
          </DialogContentText>
          <DialogContentText className="popup"> 
            2)  Who you are with
          </DialogContentText>
          <DialogContentText className="popup"> 
            3) Your tolerance level
          </DialogContentText>
          <DialogContentText className="popup"> 
            4) Ingestion method
          </DialogContentText>
          <DialogContentText className="popup"> 
            5) Age
          </DialogContentText>
          <DialogContentText className="popup"> 
            6) Biochemistry
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