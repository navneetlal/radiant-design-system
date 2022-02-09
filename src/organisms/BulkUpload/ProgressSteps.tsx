import React from "react";

import MuiStepper from "@mui/material/Stepper";
import MuiStep from "@mui/material/Step";
import MuiStepLabel from "@mui/material/StepLabel";
import MuiTypography from "@mui/material/Typography";
import MuiStepConnector from "@mui/material/StepConnector";
import { useTheme } from "@mui/material/styles";

const ProgressSteps = ({ activeStep }: any) => {
  const steps = ["Upload File", "Manage Upload"];
  const theme = useTheme();

  return (
    <div>
      <MuiStepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ width: "564px", padding: 0, backgroundColor: "transparent" }}
        connector={
          <MuiStepConnector
            sx={{
              "& .MuiStepConnector-line": {
                borderColor: theme.palette.primary[200],
                borderTopWidth: 2,
              },
              left: "calc(-50% + 12px)",
              right: "calc(50% + 12px)",
            }}
          />
        }
      >
        {steps.map((label) => (
          <MuiStep key={label}>
            <MuiStepLabel>
              <MuiTypography variant="h5">{label}</MuiTypography>
            </MuiStepLabel>
          </MuiStep>
        ))}
      </MuiStepper>
    </div>
  );
};

export default ProgressSteps;
