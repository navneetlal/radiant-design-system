import React from "react";
import MuiCircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";

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
    <Card
      sx={{
        width: "163px",
        height: "186px",
        alignContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          textAlign: "center",
          marginTop: 0,
          boxSizing: "border-box",
          padding: 0,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "154px",
            color: theme.palette.grey[650],
            ...theme.typography.h5,
            marginTop: "12px",
            paddingLeft: "5px !important",
            "&:hover": {
              cursor: "text",
              backgroundColor: "#ffffff !important",
            },
          }}
          gutterBottom
        >
          {label}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          position: "relative",
          display: "inline-flex",
          marginLeft: "22px",
        }}
      >
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "-7px",
            left: 5,
            bottom: 0,
            right: 0,

            position: "absolute",
          }}
        >
          <MuiTypography
            variant="h2"
            component="div"
            sx={{
              fontWeight: "600",
              lineHeight: "36px",
            }}
          >{`${Math.round(value)}%`}</MuiTypography>
        </MuiBox>
      </CardContent>
    </Card>
  );
};

export default CircularProgress;
