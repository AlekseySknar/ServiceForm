import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 2,
    label: "2 км"
  },
  {
    value: 5,
    label: "5 км"
  },
  {
    value: 10,
    label: "10 км"
  },
  {
    value: 30,
    label: "30 км"
  }
];

function valuetext(value) {
  return `${value}км`;
}

export default function DistanceSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
