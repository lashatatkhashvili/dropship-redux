import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsAction";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0 8px",
    marginTop: 25,
  },
  heading: {
    fontSize: 14,
    marginLeft: -5,
    marginBottom: 5,
    color: "#323949",
    fontFamily: "Gilroy-med",
  },
  prices: {
    width: 190,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dollar: {
    width: 19,
    fontFamily: "Gilroy-med",
    color: "#BAC0C4",
    backgroundColor: "#fff",
    padding: "2px 5px",
    marginLeft: -6,
    marginRight: 5,
    bordeRadius: "2px 0 0 2px",
  },
  value: {
    fontFamily: "Gilroy-med",
    color: "#7D8992",
    backgroundColor: "#fff",
    padding: "2px 10px",
    marginLeft: -6,
    bordeRadius: "2px 0 0 2px",
    borderLeft: "2px solid #ECEDF5",
  },
});

export default function RangeSlider({ name, min, max, type, reset }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([min, max]);

  const dispatch = useDispatch();

  const filter = () => {
    dispatch(getProducts({ value, type }));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue([min, max]);
    dispatch(getProducts());
  }, [reset, min, max, dispatch]);

  return (
    <div className={classes.root}>
      <Typography id="range-slider" className={classes.heading}>
        {name}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={filter}
        aria-labelledby="range-slider"
        min={min}
        max={max}
      />
      <div className={classes.prices}>
        <p>
          <span className={classes.dollar}>{type}</span>
          <span className={classes.value}>{value[0]}</span>
        </p>
        <p>
          <span className={classes.dollar}>{type}</span>
          <span className={classes.value}>{value[1]}</span>
        </p>
      </div>
    </div>
  );
}

RangeSlider.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};
