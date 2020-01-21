import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DistanceSlider from "./DistanceSlider";
import Tooltip from "@material-ui/core/Tooltip";

import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";

const useStyles = makeStyles(theme => ({
  paperHead: {
    backgroundColor: "#33b5e5",
    height: 68,
    padding: "5 0"
  },
  media: {
    height: 140,
    backgroundColor: "aaa"
  },
  headerText: {
    color: "white",
    paddingTop: 12
  },
  gridItem: {
    padding: 2
  },
  container: {
    width: "auto",
    margin: theme.spacing(2)
  },
  gridContentEnd: {
    display: "inline-flex",
    justifyContent: "flex-end"
  }
}));

function App() {
  const myStyles = useStyles();
  const deliveriTooltip =
    "Наш курьер увезет ваше устройство, и больше вы его не увидите!";

  return (
    <div>
      <Container maxWidth="md">
        <Paper>
          <div className={myStyles.paperHead}>
            <Typography
              variant="h4"
              align="center"
              className={myStyles.headerText}
            >
              Поиск сервиса
            </Typography>
          </div>

          <Grid
            container
            spacing={2}
            alignItems="flex-end"
            className={myStyles.container}
          >
            <Grid
              item
              xs={12}
              sm={1}
              style={{
                textAlign: "center",
                paddingBottom: 0,
                paddingRight: 0
              }}
            >
              <PhoneAndroidRoundedIcon fontSize="large" color="#aaa" />
            </Grid>
            <Grid item xs={12} sm={5} className={myStyles.gridItem}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Phone manufacturer"
                fullWidth
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Phone model"
                fullWidth
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12} sm={6} className={myStyles.gridContentEnd}>
              <Tooltip title={deliveriTooltip}>
                <FormControlLabel
                  control={<Checkbox value="checkedB" color="primary" />}
                  label="Нужен курьер"
                  labelPlacement="start"
                />
              </Tooltip>
            </Grid>

            <Grid item xs={12} sm={6}>
              <DistanceSlider />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
