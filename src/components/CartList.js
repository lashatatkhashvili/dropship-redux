import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateCartList, removeFromCart } from "../actions/cartAction";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "90vh",
    overflowY: "visible",
  },
  head: {
    background: "white",
    position: "sticky",
    top: 0,
    marginBottom: 50,
    zIndex: 9999,
  },
  table: {
    minWidth: 650,
  },
});

export default function CartList() {
  const classes = useStyles();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const quantity = (e, id) => {
    dispatch(updateCartList(id, e.currentTarget.value));
  };

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Desc</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">QTY</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart &&
            cart.map(
              (item) =>
                item.qty > 0 && (
                  <TableRow key={item.title}>
                    <TableCell component="th" scope="row" width="10%">
                      {item.title}
                    </TableCell>
                    <TableCell align="center" width="30%">
                      <img
                        src={item.image}
                        alt="img"
                        width="150"
                        height="120"
                      />
                    </TableCell>
                    <TableCell align="center" width="30%">
                      {item.description}
                    </TableCell>
                    <TableCell align="center" width="10%">
                      {item.price * item.qty}
                    </TableCell>
                    <TableCell align="center" width="10%">
                      <TextField
                        type="number"
                        value={item.qty}
                        onChange={(e) => quantity(e, item.id)}
                        variant="outlined"
                        inputProps={{
                          style: { textAlign: "center", width: 60 },
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" width="10%">
                      <Button onClick={() => remove(item.id)}>X</Button>
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
