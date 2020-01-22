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
    value: 8,
    label: "8 км"
  },
  {
    value: 15,
    label: "15 км"
  },
  {
    value: 30,
    label: "30 км"
  }
];

function valuetext(value) {
  if (value <= 30) return `${value}км`;
}

export default function DistanceSlider() {
  const classes = useStyles();

  return (
    <div>
      <Typography id="discrete-slider-always" gutterBottom>
        Сервис не дальше чем:
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={2}
        marks={marks}
        valueLabelDisplay="on"
        max={32}
      />
    </div>
  );
}
