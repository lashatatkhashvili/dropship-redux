import { makeStyles } from "@material-ui/core/styles";

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
    "& label.Mui-focused": {
      color: "rgba(59,59,59,.2)",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgba(59,59,59,.2)",
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    background: "#fff",
    width: "min(413px, 95%)",
    height: "fit-content",
    borderRadius: 8,
    padding: "34px 40px",
  },
  title: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 30,
  },
  paragraph: {
    width: "100%",
    textAlign: "center",
    marginRight: 30,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
  btn: {
    background: "#61d5df",
    textTransform: "none",
    height: 44,
    color: "#fff",
    "&:hover": {
      background: "#61d5df",
      opacity: 0.9,
    },
  },
  account: {
    alignSelf: "flex-end",
    color: "rgba(59,59,59,.64)",
  },
  link: {
    textDecoration: "none",
    color: "rgba(59,59,59,.72)",
    fontWeight: 600,
  },
});

export default useStyles;
