import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Box,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { registerValidation } from "../Validations";
import { MailOutline, VpnKey, AccountBox } from "@material-ui/icons";
import useStyles from "../styles/authorisation.style";
import { useDispatch } from "react-redux";
import { registerAction } from "../actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      dispatch(registerAction(values));
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
          <Typography className={classes.paragraph}>Sign Up</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            placeholder="First Name"
            variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            }}
          />

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
          <TextField
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            variant="outlined"
            type="password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Button fullWidth type="submit" className={classes.btn}>
            Sign Up
          </Button>
        </form>
        <Box>
          <Typography className={classes.account}>
            Already have an account?{" "}
            <Link to="./login" className={classes.link}>
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
