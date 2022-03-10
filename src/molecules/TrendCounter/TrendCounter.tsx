import React from "react";

import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiGrid from "@mui/material/Grid";
import MuiTypography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

import Tooltip from "../../components/Tooltip/Tooltip";

export interface ICounter3 {
  currentValue?: number;
  Icon?: React.FunctionComponent<any>;
  label?: string;
  infoMessage?: string;
  direction?: "up" | "down";
  color?: "primary" | "secondary" | "warning" | "success" | "error";
  changeInPercent?: number;
}

const Counter3 = ({
  currentValue,
  Icon,
  label,
  infoMessage = "Enter Info Message here",
  direction = "up",
  color = "primary",
  changeInPercent,
}: ICounter3) => {
  const theme = useTheme();

  return (
    <MuiCard
      sx={{
        width: "122px",
        position: "inherit",
        height: changeInPercent ? "auto" : "auto",
        backgroundColor: theme.palette.primary[50],
        borderRadius: "4px",
        textAlign: "center",
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
      <MuiCardContent
        sx={{
          padding: "0",
          paddingTop: "16px",
          paddingBottom: "0 !important",
          textAlign: "center",
        }}
      >
        <MuiTypography
          variant="h5"
          sx={{
            color: theme.palette.grey[650],
            ...theme.typography.h5,
            paddingLeft: "8px",
            paddingRight: "8px",
            width: "85px",
            margin: "auto",
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
          {currentValue?.toLocaleString()}
        </MuiTypography>
        {changeInPercent && (
          <MuiGrid
            container
            spacing={0}
            direction={"row"}
            justifyContent="center"
            alignItems="center"
          >
            <MuiGrid item>
              <ArrowForwardIcon
                color={color}
                sx={{
                  transform:
                    direction === "up" ? "rotate(-45deg)" : "rotate(135deg)",
                  "&:after": {
                    position: "static !important",
                  },
                }}
              />
            </MuiGrid>
            <MuiGrid item>
              <MuiTypography
                variant="subtitle2"
                sx={{
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: theme.palette[color].main,
                  fontFamily: "Source Sans Pro",

                  paddingRight: "8px",
                  paddingTop: "10px",
                  paddingBottom: "16px",
                  textAlign: "center",
                }}
              >
                {`${Math.round(changeInPercent)}%`}
              </MuiTypography>
            </MuiGrid>
          </MuiGrid>
        )}
      </MuiCardContent>
    </MuiCard>
  );
};

export default Counter3;

// <MuiCard
//       sx={{
//         width: "122px",
//         position: "relative",
//         height: changeInPercent ? "auto" : "auto",
//         backgroundColor: theme.palette.primary[50],
//         borderRadius: "4px",
//         //textAlign : 'center'
//       }}
//       elevation={0}
//     >
//       {Icon && (
//         <Tooltip color="dark" size="small" title={infoMessage}>
//           <Icon
//             color="warning"
//             sx={{
//               cursor: "pointer",

//               width: "20px",
//               height: "20px",
//               float: "right",
//               paddingRight: "2px",
//               paddingTop: "2px",
//             }}
//           />
//         </Tooltip>
//       )}
//       <MuiCardContent sx = {{padding : '0' , paddingTop : '16px' , paddingBottom : '0 !important', textAlign : 'center' }}>
//         <MuiTypography
//           variant="h5"
//           sx={{
//             color: theme.palette.grey[650],
//             ...theme.typography.h5,
//             paddingLeft: "8px",
//             paddingRight: "8px",
//             //textAlign: "center",
//           }}
//         >
//           {label}
//         </MuiTypography>
//         <MuiTypography
//           variant="h2"
//           sx={{
//             ...theme.typography.h2,
//             color: theme.palette.grey[650],
//             paddingLeft: "8px",
//             paddingRight: "8px",
//             paddingTop: "10px",
//             textAlign: "center",
//           }}
//         >
//           {currentValue?.toLocaleString()}
//         </MuiTypography>
//         {changeInPercent && (
//           <MuiGrid
//             container
//             spacing={0}
//             direction={"row"}
//             justifyContent="center"
//             alignItems="center"
//           >
//             <MuiGrid item>
//               <ArrowForwardIcon
//                 color={color}
//                 sx={{
//                   transform:
//                     direction === "up"
//                       ? "rotate(-45deg)"
//                       : "rotate(135deg)",
//                 }}
//               />
//             </MuiGrid>
//             <MuiGrid item>
//               <MuiTypography
//                 variant="subtitle2"
//                 sx={{
//                   fontWeight: "normal",
//                   fontStyle: "normal",
//                   color: theme.palette[color].main,
//                   fontFamily: "Source Sans Pro",

//                   paddingRight: "8px",
//                   paddingTop: "10px",
//                   paddingBottom: "16px",
//                   textAlign: "center",
//                 }}
//               >
//                 {`${Math.round(changeInPercent)}%`}
//               </MuiTypography>
//             </MuiGrid>
//           </MuiGrid>
//         )}
//       </MuiCardContent>
//     </MuiCard>
