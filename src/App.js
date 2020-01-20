import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';

const useStyles = makeStyles({
    paperHead: {
        backgroundColor: "#33b5e5",
        height: 68,
        padding: "5 0",
    },
    media: {
        height: 140,
        backgroundColor: "#aaa"
    },
});

function App() {

    const myStyles = useStyles();

  return (
    <div>
        <Container maxWidth="md">
        <Paper>

            <div className={myStyles.paperHead}>
                <p>Hello</p>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={1}>
                    <PhoneAndroidRoundedIcon fontSize="large" />
                </Grid>
                <Grid item xs={12} sm={5}>
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

                <Grid item xs={12}>
                    <h1>HH</h1>
                </Grid>
            </Grid>
        </Paper>
        </Container>
    </div>
  );
}

export default App;
