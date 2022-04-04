import { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form1 from './pages/Form1';
import Form2 from "./pages/Form2";
import Form3 from './pages/Form3';
import Form4 from "./pages/Form4";
import { Stepper, StepLabel, Step, } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import LeftBar from './includes/LeftBar';
import "./css/Dash.css";
import FormSubmit from './pages/FormSubmit';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Form0 from "./pages/Form0";

function App() {

  const { currentStep } = useContext(multiStepContext);

  function showStep(step) {
    if(step=== 1){
      return <Form0 />
    }
    else if (step === 2) {
      return <Form1 />
    } else if (step === 3) {
      return <Form2 />
    } else if (step === 4) {
      return <Form3 />
    } else if (step === 5) {
      return <Form4 />;
    } else if (step === 6) {
      return <FormSubmit />
    };
  };

  return (
    <>
      <LeftBar />
      <div className="main-content">
        <main>
          <section className="recent">
            <div className="col-12" style={{ marginTop: "15px" }}>
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

                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>
              </div>
              {showStep(currentStep)}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
