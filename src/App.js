import React from "react";
import "./App.css";

import Appbar from "./components/Appbar";
import Stepper from "./components/Stepper";

import MainLayout from "./layouts/MainLayout";

import DittoPage from "./pages/Ditto";

import { connect } from "react-redux";
import { setActiveStep } from "./redux/actions";

const stepNames = [
  "Pick your Ditto",
  "GTS Deposit",
  "Player Info",
  "Copy and submit"
];

export function App({ activeStep }) {
  return (
    <div className="App">
      <Appbar />
      <MainLayout>
        <Stepper activeStep={activeStep} steps={stepNames} />
        <DittoPage />
      </MainLayout>
    </div>
  );
}

const mapStateToProps = ({ activeStep }) => ({
  activeStep: activeStep
});

const mapDispatchToProps = {
  setActiveStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
