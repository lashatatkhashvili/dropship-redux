import * as yup from "yup";

export const registerValidation = yup.object({
  firstName: yup
    .string("Enter your name")
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string("Enter your name")
    .required("Last Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 4 characters length")
    .required("Password is required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginValidation = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required"),
});
