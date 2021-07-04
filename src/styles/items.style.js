import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  add: {
    width: "200px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "6px",
    border: "solid 1px #eaeaea",
    backgroundColor: "#ffffff",
    marginRight: 15,
    flexShrink: 0,
    color: "#5EBE84",
    "&:hover": {
      backgroundColor: "rgba(94, 190, 132, 0.1)",
      cursor: "pointer",
      border: "dashed 0.5px #5EBE84",
      borderRadius: "12px",
    },
  },

  addText: {
    width: 80,
    fontWeight: 400,
    fontSize: 18,
    color: "#1d3452",
    marginTop: 16,
  },
});
