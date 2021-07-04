import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productsAction";
import Grid from "@material-ui/core/Grid";
import * as Icons from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Nav from "../components/Nav";
import useStyles from "../styles/items.style";
import AddProduct from "../components/AddProduct";

export default function Items() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsData);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const items =
    products &&
    products.map((item, index) => (
      <img
        src={item.imageUrl}
        alt="img"
        style={{ width: 400, height: 400 }}
        onClick={() => console.log(item)}
      />
    ));

  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <AddProduct open={open} setOpen={setOpen} />
      <div
        style={{
          display: "flex",
          marginLeft: 100,
          marginTop: "10%",
        }}
      >
        <div onClick={() => setOpen(true)}>
          <Box className={classes.add}>
            <Grid>
              <Icons.Add />
            </Grid>
            <span className={classes.addText}>{"Add new product"}</span>
          </Box>
        </div>
        <div style={{ width: "70vw" }}>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            items={items}
            autoWidth
            infinite
          />
        </div>
      </div>
    </div>
  );
}
