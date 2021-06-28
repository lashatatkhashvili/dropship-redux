import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box, InputAdornment } from "@material-ui/core";
import { MailOutline, VpnKey } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { loginAction } from "../actions/authAction";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url("/assets/auth.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    background: "#fff",
    width: "min(413px, 95%)",
    height: 520,
    borderRadius: 8,
    padding: "34px 40px",
  },
  form: {
    padding: "0 20px",
    height: 200,
  },
  btn: {
    background: (props) => props.color,
    "&:hover": {
      background: (props) => props.hover,
    },
  },
});

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});

const Login = ({ type }) => {
  type = 3;
  const dispatch = useDispatch();
  const classes = useStyles({
    color: type === 1 ? "red" : type === 2 ? "blue" : "purple",
    hover: "green",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
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
          <Button fullWidth type="submit" className={classes.btn}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
