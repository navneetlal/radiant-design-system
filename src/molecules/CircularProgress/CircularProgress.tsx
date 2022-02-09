import React from "react";
import MuiCircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export interface ICircularProgress extends CircularProgressProps {
  label: string;
}

const CircularProgress = ({
  label,
  value = 0,
  ...otherProps
}: ICircularProgress) => {
  const theme = useTheme();
  return (
    <MuiBox
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "max-content",
        height: "100px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        marginTop: "70px",
        marginLeft: "30px",
        marginRight: "40px"
      }}
    >
      <MuiBox
        sx={{
          bottom: "145px",
          left: "45px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MuiTypography
          variant="h5"
          sx={{
            position: "absolute",
            lineHeight: "16px",
            width: "154px",
            textAlign: "center",
          }}
          color="text.secondary"
        >
          {label}
        </MuiTypography>
      </MuiBox>
      <MuiCircularProgress
        variant="determinate"
        value={value}
        sx={{
          backgroundColor: theme.palette.primary[50],
          borderRadius: "50%",
          width: "85px !important",
          height: "84px !important",
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
        {...otherProps}
      />
      <MuiBox
        sx={{
          top: 0,
          left: 5,
          bottom: 15,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MuiTypography
          variant="h2"
          component="div"
          sx={{ fontWeight: "600", lineHeight: "36px" }}
        >{`${Math.round(value)}%`}</MuiTypography>
      </MuiBox>
    </MuiBox>
  );
};

export default CircularProgress;
