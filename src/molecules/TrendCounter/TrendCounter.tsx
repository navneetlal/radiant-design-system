import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import  Tooltip  from "../../components/Tooltip/Tooltip";
export interface ICounter3 {
  number?: number;
  Icon?: React.FunctionComponent<any>;
  label?: string;
  infoMessage?: string;
  changeDirection?: "up" | "down";
  changeColor?: "primary" | "secondary" | "warning" | "success" | "error";
  changeValue?: number;
}

const Counter3 = ({
  number,
  Icon,
  label,
  infoMessage = "Enter Info Message here",
  changeDirection = "up",
  changeColor = "primary",
  changeValue,
}: ICounter3) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "max-content",
        position: "relative",
        height: changeValue ? "160px" : "auto",
        backgroundColor: theme.palette.primary[50],
        borderRadius: "4px",
      }}
      elevation={0}
    >
      {Icon && (
        <Tooltip color="dark" size="medium" title={infoMessage}>
          <Icon
            color="warning"
            sx={{
              cursor: "pointer",

              width: "20px",
              height: "20px",
              float: "right",
              paddingRight: "2px",
              paddingTop: "2px",
            }}
          />
        </Tooltip>
      )}

      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.grey[650],
            ...theme.typography.h5,
            paddingLeft: "8px",
            paddingRight: "8px",
            textAlign: "center",
            width: changeValue ? "106px" : "200px",
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            ...theme.typography.h2,
            color: theme.palette.grey[650],
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          {number?.toLocaleString()}
        </Typography>
        {changeValue && (
          <Grid
            container
            spacing={0}
            direction={"row"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <ArrowForwardIcon
                color={changeColor}
                sx={{
                  transform:
                    changeDirection === "up"
                      ? "rotate(-45deg)"
                      : "rotate(135deg)",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: theme.palette[changeColor].main,
                  fontFamily: "Source Sans Pro",

                  paddingRight: "8px",
                  paddingTop: "10px",
                  paddingBottom: "16px",
                  textAlign: "center",
                }}
              >
                {`${Math.round(changeValue)}%`}
              </Typography>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default Counter3;
