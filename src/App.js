import { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form1 from './pages/Form1';
import Form2 from "./pages/Form2";
import Form3 from './pages/Form3';
import Form4 from "./pages/Form4";
import { Stepper, StepLabel, Step, Card, Grid } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import LeftBar from './includes/LeftBar';
import FormSubmit from './pages/FormSubmit';

function App() {

  const { currentStep } = useContext(multiStepContext);

  function showStep(step) {
    if (step === 1) {
      return <Form1 />
    } else if (step === 2) {
      return <Form2 />
    } else if (step === 3) {
      return <Form3 />
    } else if (step === 4) {
      return <Form4 />;
    } else if (step === 5) {
      return <FormSubmit />
    };
  };

  return (
    <>
      <Grid item container>
        <div className="col-2">
          <LeftBar />
        </div>
        <div className="col-10" style={{ padding: "10px", backgroundColor: "#efefef", marginTop: '80px' }}>
          <Card style={{ padding: "10px" }}>
            <div className="col-12" style={{ marginTop: "15px" }}>
              {
                currentStep !== 5 ?
                  <div className="container center-stepper">
                    <Stepper style={{ width: "100%" }} activeStep={currentStep - 1} orientation='horizontal'>
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                    </Stepper>
                  </div> : ""
              }

              {showStep(currentStep)}
            </div>
          </Card>
        </div>
      </Grid>
    </>
  );
}

export default App;
