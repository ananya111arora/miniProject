import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Icon,
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from "./Styles1";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { signIn, signUp } from '../../actions/auth';

export const Auth = () => {
  const initialState = { email:'', password:'', name: '', phone: '', confirmPassword: ''};
  const classes = useStyles();
  const [ formData, setFormData ] = useState(initialState);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ isSignedUp, setSignedUp ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignedUp) {
      dispatch(signUp(formData, navigate))
    }else{
      dispatch(signIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  };

  const switchMode = () => {
    setFormData(initialState);
    setSignedUp((prevIsSignedUp) => !prevIsSignedUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try {
        dispatch({ type: 'AUTH', data: { result, token }})
        navigate('/');
      }catch(error) {
        console.log(error);
      }
  }

  const googleFailure = () => {
      alert('Google Sign In was unsuccessful. Try Again Later')
}

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignedUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            {isSignedUp && (
              <>
                <Input
                  name="name"
                  label="Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="phone"
              label="Phone"
              handleChange={handleChange}
              type="phone"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignedUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="Submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignedUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="909411184904-9mtp7ok094nluamqnsdc41oe349n4p55.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >Sign In with Google</Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
        />
          <Button fullWidth variant="contained" onClick={() => switchMode()}>
            {isSignedUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

