import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidation } from "../Validations";
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { MailOutline, VpnKey } from "@material-ui/icons";
import useStyles from "../styles/authorisation.style";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.title}>
          <img
            src="https://app.365dropship.com/assets/images/auth/logo.svg"
            className={classes.logo}
            alt="logo"
          />
          <Typography className={classes.paragraph}>Log In</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="E-mail"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            placeholder="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          {errorMessage && (
            <p style={{ textAlign: "center", width: "100%", color: "red" }}>
              {errorMessage}
            </p>
          )}
          <Button fullWidth type="submit" className={classes.btn}>
            Log In
          </Button>
        </form>
        <Box>
          <Typography className={classes.account}>
            Don't have an account?{" "}
            <Link to="./register" className={classes.link}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
