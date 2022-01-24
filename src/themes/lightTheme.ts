import { createTheme } from "@mui/material/styles";
import typography from "./typography.json";

import type { TypographyOptions } from "@mui/material/styles/createTypography";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {},
    primary: {
      // blue
      light: "#91B0FA",
      main: "#2C63E5",
      dark: "#264CA4",
      contrastText: "#F5F8FF",
      200: "#BFD2FD",
      100: "#D7E3FE",
      600: "#264CA4",
    },
    
    secondary: {
      // gray
      light: "#F2F2F2",
      main: "#A1A1A1",
      dark: "#666666",
      contrastText: "#E3E3E3",
      50: "#FFF7E5",
      300: "#C7C7C7",
    },
    error: {
      // red
      light: "#F9D7D7",
      main: "#FF5757",
      dark: "#CC3333",
      contrastText: "#F9D7D7",
    },
    warning: {
      // orange
      light: "#FFECDB",
      main: "#F2984A",
      dark: "#D97E2E",
      600: "#D97F30",
      contrastText: "#FFECDB",
    },
    success: {
      // green
      light: "#C2FAEA",
      main: "#00C28B",
      dark: "#008F66",
      contrastText: "#C2FAEA",
    },
    //@ts-ignore
    blackAndWhite: {
      main: "#1A1A1A",
      light: "#fff",
    },
  },
  typography: {
    ...(typography as TypographyOptions),
  },
});

lightTheme = createTheme(lightTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        startIcon: {
          marginRight: 0,
          marginLeft: 0,
        },
        sizeSmall: {
          minWidth: 118,
          height: 32,
          ...lightTheme.typography.h6,
          padding: "8px 16px",
          textTransform: "none",
        },
        sizeMedium: {
          minWidth: 144,
          height: 40,
          ...lightTheme.typography.h5,
          padding: "10px 24px",
          textTransform: "none",
        },
        sizeLarge: {
          minWidth: 193,
          height: 48,
          ...lightTheme.typography.h4,
          padding: "12px 32px",
          textTransform: "none",
        },
      },
    },
    MuiBadge: {
      variants: [
        {
          props: {},
        },
      ],
    },
    MuiBreadcrumb: {
      styleOverrides: {},
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          width: "auto",
          height: 32,
          padding: "8px 0px",
          ...lightTheme.typography.body2,
          borderRadius: 5000,
        },
        sizeMedium: {
          // minWidth: 90,
          height: 40,
          padding: "10px 0px",
          ...lightTheme.typography.body1,
          borderRadius: 5000,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          borderRadius: `4px`,
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          width: 328,
          position: "relative",
          minWidth: 360,
          padding: `8px 16px`,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ...lightTheme.typography.body2,
          height: 32,
          color: lightTheme.palette.primary.main,
          "& ul>li>button:hover": {
            backgroundColor: `rgba(0, 0, 0, 0.04)`,
          },
          "& ul>li>button:hover.Mui-selected": {
            color: lightTheme.palette.primary.contrastText,
            backgroundColor: lightTheme.palette.primary.main,
          },
          "& ul>li>button:hover.Mui-selected:hover": {
            //@ts-ignore
            backgroundColor: lightTheme.palette.primary[600],
          },
          "& svg": {
            fill: lightTheme.palette.primary.main,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          //display: "none",
          margin: 0,
          padding: 0,
          zIndex: 999,
          position: "absolute",
          //top: 58,
          "& p": {
            padding: "6px 16px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: lightTheme.palette.primary.contrastText,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: "8px",
          "&>span": {
            color: lightTheme.palette.error.main,
          },
        },
      },
    },

    MuiAutocomplete: {},
    MuiCheckbox: {
      styleOverrides: {
        root: {},
        disabled: {
          color: lightTheme.palette.secondary.main,
          cursor: "not-allowed",
        },
      },
    },

    MuiDrawer: {},
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          padding: "12px 8px",
          ...lightTheme.typography.body2,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: lightTheme.spacing(2),
          paddingRight: lightTheme.spacing(1),
        },
      },
    },
  },
});

export default lightTheme;

// const tempTheme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         outlined: (props) => ({
//           //@ts-ignore
//           color: lightTheme.palette[props.color].main,
//           backgroundColor: `#ffffff`,
//           border: `1px solid`,
//           //@ts-ignore

//           borderColor: `${lightTheme.palette[props.color].main}`,
//           "&:hover": {
//             //@ts-ignore

//             backgroundColor:
//               props.color !== "secondary" &&
//               `${lightTheme.palette[props.color].contrastText}`,
//           },
//         }),
//       },
//     },
//   },
// });

//   MuiSwitch : {
//     styleOverrides : {
//       checked : {

//       }
//     }
//     variants : [
//         {
//           props : {},
//           style : {

//           }
//         }
//     ]

//     // variants : [
//     //   {
//     //     props: { size: "small" },
//     //     style: {

//     //       transform: `translateX(12)px`,
//     //     },
//     //   },
//     //   {
//     //     props: { size: "medium" },
//     //     style: {
//     //       transform: `translate(16)px`,
//     //     },
//     //   },
//     // ]
//   }
// }
