import React, {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default function DataContribution() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper
        orientation="vertical"
        activeStep={activeStep}
        elevation={2}
        square={false}
      >
        <Step>
          <StepLabel>Select Account</StepLabel>
          <StepContent>
            Hoaa
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Credit Preference</StepLabel>
          <StepContent>
            Hoaa
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Upload</StepLabel>
          <StepContent>
            Hoaa
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Upload
            </Button>
          </StepContent>
        </Step>
      </Stepper>
    </>
  );
}
