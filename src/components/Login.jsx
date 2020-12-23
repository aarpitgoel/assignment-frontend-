import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Snackbar,
  TextField
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import users from "./usersData";
import authService from "./authService";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="https://zv8de.csb.app">Project</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "65%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login(props) {
  if (authService.isLoggedIn()) {
    props.history.push("/dashboard");
  }

  const classes = useStyles();

  const [account, setAccount] = React.useState({ username: "", password: "" });

  const [error, setError] = React.useState({ username: "", password: "" });

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (property, event) => {
    const accountCopy = {
      ...account
    };

    accountCopy[property] = event.target.value;
    setAccount(accountCopy);

    validate(property);
  };

  const validate = (property) => {
    property === "username" ? validateUsername() : validatePassword();
  };

  const handleLogin = () => {
    if (isValidUser(account.username, account.password)) {
      authService.doLogin(account.username);
      props.history.push("/dashboard");
    } else {
      setOpen(true);
    }
  };

  const isValidUser = (username, password) => {
    return users.find(
      (user) => user.username === username && user.password === password
    );
  };

  const validateUsername = () => {
    const errorCopy = { ...error };
    if (account.username.includes(" ")) {
      errorCopy.username = "Username cannot contain a space";
    } else if (account.username.length < 6) {
      errorCopy.username = `Username should be greater than 6 chars`;
    } else {
      errorCopy.username = "";
    }

    setError(errorCopy);
  };

  const validatePassword = () => {
    const errorCopy = { ...error };
    if (account.password.length < 6) {
      errorCopy.password = `Password should be greater than 6 chars`;
    } else {
      errorCopy.password = "";
    }
    setError(errorCopy);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={account.username}
            onChange={(event) => handleChange("username", event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={error.username}
            helperText={error.username}
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            error={error.password}
            helperText={error.password}
            type="password"
            id="password"
            autoComplete="current-password"
            value={account.password}
            onChange={(event) => handleChange("password", event)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container></Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Incorrect username or password
        </Alert>
      </Snackbar>
    </Grid>
  );
}
