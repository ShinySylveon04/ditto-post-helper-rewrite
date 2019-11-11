import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
    maxWidth: 250,
    width: "100%"
  },
  button: {
    marginTop: 20
  }
}));

export default function DittoPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h4" color="textPrimary">
        Choose a Ditto
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="nature-label">Nature</InputLabel>
        <Select labelId="nature-label" id="nature" value="" fullWidth>
          <MenuItem value="Adamant">Adamant</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="game-label">Game Version</InputLabel>
        <Select labelId="game-label" id="game" value="">
          <MenuItem value="XY">XY</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        GTS Deposit
      </Button>
    </Paper>
  );
}
