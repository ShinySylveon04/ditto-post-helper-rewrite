import React from "react";
import StepperContainer from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    paddingLeft: 0,
    paddingRight: 0
  }
});

export default function Stepper({ steps, activeStep }) {
  const classes = useStyles();
  return (
    <StepperContainer
      alternativeLabel
      activeStep={activeStep}
      classes={classes}
      orientation="horizontal"
    >
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </StepperContainer>
  );
}
