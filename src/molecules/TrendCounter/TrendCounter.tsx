import React from "react";

import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

import Tooltip from "../../components/Tooltip/Tooltip";

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
    <MuiCard
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
        <Tooltip color="dark" size="small" title={infoMessage}>
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
      <MuiCardContent>
        <MuiTypography
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
        </MuiTypography>
        <MuiTypography
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
        </MuiTypography>
        {changeValue && (
          <MuiGrid
            container
            spacing={0}
            direction={"row"}
            justifyContent="center"
            alignItems="center"
          >
            <MuiGrid item>
              <ArrowForwardIcon
                color={changeColor}
                sx={{
                  transform:
                    changeDirection === "up"
                      ? "rotate(-45deg)"
                      : "rotate(135deg)",
                }}
              />
            </MuiGrid>
            <MuiGrid item>
              <MuiTypography
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
              </MuiTypography>
            </MuiGrid>
          </MuiGrid>
        )}
      </MuiCardContent>
    </MuiCard>
  );
};

export default Counter3;
