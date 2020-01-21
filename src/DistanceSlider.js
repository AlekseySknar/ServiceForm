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
    value: 4,
    label: "2 км"
  },
  {
    value: 16,
    label: "5 км"
  },
  {
    value: 33,
    label: "10 км"
  },
  {
    value: 100,
    label: "30 км"
  }
];

function valuetext(value) {
  return `${value}км`;
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
        step={4}
        marks={marks}
        valueLabelDisplay="on"
        disa
      />
    </div>
  );
}
