import { createTheme } from "@mui/material/styles";
import typography from "./typography.json";

import type { TypographyOptions } from "@mui/material/styles/createTypography";

export let lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {},
    primary: {
      light: "#91B0FA", // primary300
      main: "#2C63E5", // primary500
      dark: "#264CA4", // primary600
      900: '#151E33',
      800: '#24428A',
      200: '#BFD2FD',
      100: '#D7E3FE',
      50: '#F5F8FF',
      contrastText: "#F5F8FF",
    },
    secondary: {
      light: '#FFF7E6',
      main: '#FFCD59',
      dark: '#CC981F'
    },
    support: {
      success: {
        light: "#C2FAEA",
        main: "#00C28B",
        dark: "#008F66",
        contrastText: '#C2FAEA'
      },
      error: {
        light: "#F9D7D7",
        main: "#FF5757",
        dark: "#CC3333",
        contrastText: '#F9D7D7'
      },
      warning: {
        light: "#FFECDB",
        main: "#F2984A",
        dark: "#D97E2E",
        600 : "#D97F30",
        contrastText: '#FFECDB'
      }
    },
    grey: {
      100 : '#A1A1A1',
      150: '#F2F2F2', // grey50
      300: '#E3E3E3', // grey100
      350: '#C7C7C7', // grey200
      650: '#666666' // grey500
    },
    common: {
      black: '#1A1A1A',
      white: '#ffffff'
    }
  },
  typography: {
    ...(typography as TypographyOptions),
  },
});

lightTheme = createTheme(lightTheme, {
  palette: {
    warning: lightTheme.palette?.support?.warning,
    error: lightTheme.palette?.support?.error,
    success: lightTheme.palette?.support?.success
  }
})

lightTheme = createTheme(lightTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          minWidth: '98px',
          height: 32,
          ...lightTheme.typography.h6,
          padding: "8px 16px",
          textTransform: "none",
        },
        sizeMedium: {
          minWidth: '120px',
          height: '40px',
          ...lightTheme.typography.h5,
          padding: "10px 24px",
          textTransform: "none",
        },
        sizeLarge: {
          minWidth: '161px',
          height: '48px',
          ...lightTheme.typography.h4,
          padding: "12px 32px",
          textTransform: "none",
        },
      },
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
          
          "& ul>li>button.Mui-selected" : {
            backgroundColor: lightTheme.palette.primary.main,
            color : lightTheme.palette.common.white
          },
          "& ul>li>button:hover": {
            backgroundColor: `rgba(0, 0, 0, 0.04)`,
          },
          "& ul>li>button:hover.Mui-selected": {
            color: lightTheme.palette.primary.contrastText,
            backgroundColor: lightTheme.palette.primary.main,
          },
          "& ul>li>button:hover.Mui-selected:hover": {
            backgroundColor: lightTheme.palette.primary.dark,
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
          }
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: "4px",
          
          "&>span": {
            color: lightTheme.palette.support?.error?.main,
          },
        },
      },
    },
    MuiInputBase : {
      styleOverrides : {
        input : (props:any) => ({
          "&::placeholder" : {
            color : props.disabled ?  lightTheme.palette.grey[100] : lightTheme.palette.grey[650],
            opacity : `1 !important`
          },
          backgroundColor : props.disabled ? lightTheme.palette.grey[150] : lightTheme.palette.common.white
        }),
        
      }
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {},
        disabled: {
          color: lightTheme.palette.grey[100],
          cursor: "not-allowed",
        },
      },
    },

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

