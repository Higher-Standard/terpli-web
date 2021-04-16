
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
import {
    SocialIconLink
  } from '../Footer/FooterElements';
  import {
    FaLinkedin
  } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
    backgroundColor: 'blue'
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
    backgroundColor: 'blue'
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
    backgroundColor: 'blue'
  },
  title: {
    opacity: .9,
    fontSize: "20px",
    marginTop: "10px",
    color: "#C2E531",
    lineHeight: "1px",
    fontWeight: "700",
    fontFamily: "Montserrat",
  }
}));

export default function Oliver1() {
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
    <React.Fragment>
      <Button onClick={handleClickOpen} className={classes.title}>
        Oliver Bigelow
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Oliver Bigelow</DialogTitle>
        <DialogContent>
          <DialogContentText>
          (b. 2001, Portland, ME) UCLA Extension Full-Stack Development Bootcamp (2020); Independent researcher of production level aquaponic systems (2015). Oliver is passionate about plants and technology. This makes him a perfect fit for Terpli.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}