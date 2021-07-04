import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { addProduct } from "../actions/productsAction";
import { addProductValidation } from "../Validations";

const styles = (theme) => ({
  root: {
    minWidth: 600,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, setOpen }) {
  const dispatch = useDispatch();

  const { values, setFieldValue, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        price: "",
        imageUrl: "",
      },
      validationSchema: addProductValidation,
      onSubmit: (values) => {
        dispatch(addProduct(values));
        setOpen(false);
      },
    });

  const handleClose = () => {
    setOpen(false);
  };

  const fileUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxkt3hoda/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setFieldValue("imageUrl", file.secure_url);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          ADD PRODUCT
        </DialogTitle>
        <DialogContent
          dividers
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            padding: 30,
          }}
        >
          <TextField
            fullWidth
            type="file"
            id="image"
            name="image"
            placeholder="Image"
            variant="outlined"
            error={touched.imageUrl && Boolean(errors.imageUrl)}
            onChange={fileUpload}
          />
          {values.imageUrl && (
            <img src={values.imageUrl} alt="img" width="300" height="150" />
          )}
          <TextField
            fullWidth
            id="title"
            name="title"
            placeholder="title"
            variant="outlined"
            value={values.title}
            error={touched.title && Boolean(errors.title)}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            id="description"
            name="description"
            placeholder="description"
            variant="outlined"
            value={values.description}
            error={touched.description && Boolean(errors.description)}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="number"
            id="price"
            name="price"
            placeholder="1000"
            variant="outlined"
            value={values.price}
            error={touched.price && Boolean(errors.price)}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSubmit}
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
