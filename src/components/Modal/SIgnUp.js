import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Terpli 2021 All Rights Reserved.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignUp() {
  const classes = useStyles();
  const [investorInfo, setInvestorInfo] = useState({ name: '', email: '', message: '' })
  const [anchorEl, setAnchorEl] = useState(null);
  // when the input field changes it also changes the state
  const handleChange = (e) => {
    setInvestorInfo({ ...investorInfo, [e.target.name]: e.target.value })
    console.log(investorInfo)
  }
  const handleSubmit = (e) => {
    axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Referrer-Policy": "unsafe-url"
      },
      method: 'post',
      // this is the url for webnode db
      url: 'https://api.terply.io/api/investor/new',
      data: investorInfo
    })
      .then(res => {
        console.log(res)
        setInvestorInfo({ email: '', name: '', message: '' })
        if (res.data.errors) {
          alert(JSON.stringify(res.data.errors[0].message))
        } else {
          alert('Your email has been put on the early access list, Thank You!')
        }
      })
      .catch(err => {
        alert(err)
      })
    e.preventDefault();
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container className="content-contact" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={handleChange}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                value={investorInfo.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={investorInfo.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Select Category
</Button>
              <Menu
                fullWidth
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Investor</MenuItem>
                <MenuItem onClick={handleClose}>Cultivator</MenuItem>
                <MenuItem onClick={handleClose}>Manufacturer</MenuItem>
                <MenuItem onClick={handleClose}>Retailer</MenuItem>
                <MenuItem onClick={handleClose}>Researcher</MenuItem>
                <MenuItem onClick={handleClose}>Other</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={12}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-multiline-flexible"
                  onChange={handleChange}
                  label="message"
                  multiline
                  rowsMax={10}
                  fullWidth
                  name='message'
                  variant="outlined"
                  value={investorInfo.message} />
              </form>
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}