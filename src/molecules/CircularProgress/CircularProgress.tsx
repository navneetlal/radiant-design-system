import MuiCircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
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
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "max-content",
        height: "100px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        marginTop: "70px",
        marginLeft : "30px",
        marginRight : "40px"
      }}
      component={Box}
    >
      <Box
        sx={{
          bottom: "145px",
          left: "45px",

          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
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
        </Typography>
      </Box>

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
      <Box
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
        <Typography
          variant="h2"
          component="div"
          sx={{ fontWeight: "600", lineHeight: "36px" }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgress;
