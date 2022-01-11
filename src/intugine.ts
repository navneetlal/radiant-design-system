import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  h1: {
    fontSize: 32,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    lineHeight: "48px",
  },
  h2: {
    fontSize: 24,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    lineHeight: "36px",
  },
  h3: {
    fontSize: 20,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 12,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    lineHeight: "20px",
  },
  h6: {
    fontSize: 11,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    lineHeight: "16px",
  },
  subtitle1: {
    fontSize: 20,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "32px",
  },
  subtitle2: {
    fontSize: 16,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "24px",
  },
  body1: {
    fontSize: 14,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "20px",
  },
  body2: {
    fontSize: 12,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "16px",
  },
  button: {
    textTransform: "none",
  },
};

export const lightTheme = createTheme({
  palette: {
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
      main: "#C7C7C7",
      dark: "#666666",
      contrastText: "#E3E3E3",
      50: "#FFF7E5",
      300: "#A1A1A1",
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
      main: '#1A1A1A',
      light: '#fff',
    },
  },
  //@ts-ignore
  typography: {
    ...typography,
  },
});

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: lightTheme.palette.primary.main,
          "&:hover": {
            background: lightTheme.palette.primary.dark,
          },
        },
        text: {
          color: lightTheme.palette.primary.main,
          "&:hover": {
            background: lightTheme.palette.primary.dark,
          },
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
        disabled: {
          backgroundColor: lightTheme.palette.secondary.light + " !important",
          //@ts-ignore
          color: lightTheme.palette.secondary[300] + " !important",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          color: lightTheme.palette.primary.light,
          height: "32px", // medium
          transform: "scale(1) translate(90%, -60%)",
          borderRadius: "50%",
          ...lightTheme.typography.body1,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: lightTheme.palette.secondary.dark,
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
          height: 40,
          padding: "10px 0px",
          ...lightTheme.typography.body1,
          borderRadius: 5000,
        },
        root: {
          backgroundColor: lightTheme.palette.primary.main,
          "&:focus": {
            backgroundColor: lightTheme.palette.primary.main,
          },
          "&:hover": {
            backgroundColor: lightTheme.palette.primary.dark,
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          minWidth: 860,
          padding: "8px 16px",
          //color : lightTheme.palette.primary.light
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: lightTheme.palette.primary.main,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ...lightTheme.typography.body2,
          height: 32,
          "& ul>li>button:hover": {
            color: lightTheme.palette.info.main,
          },
          "& ul>li>button:hover.Mui-selected": {
            color: lightTheme.palette.info.dark,
          },
          "& svg": {
            fill: lightTheme.palette.primary.main,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          //@ts-ignore
          color: lightTheme.palette.primary[600],
        },
        tooltipPlacementTop: {
          //@ts-ignore
          backgroundColor: lightTheme.palette.primary[600],
          //@ts-ignore
          border: `1px solid ${lightTheme.palette.primary[200]}`,
          borderRadius: 4,
          ...lightTheme.typography.body2,
          padding: "4px 8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "label + &": {
            marginTop: lightTheme.spacing(1),
          },
        },
        input: {
          borderRadius: 4,
          position: "relative",
          ...lightTheme.typography.body2,
          border: `1px solid ${lightTheme.palette.secondary.main}`,
          width: 192,
          cursor: "pointer",
          borderColor: lightTheme.palette.secondary.main,
          alignSelf: "flex-end",
          height: 32,
          padding: "8px 12px",
          "&:focus": {
            borderColor: lightTheme.palette.primary.main,
          },
          "&:not(:placeholder-shown):invalid": {
            borderColor: lightTheme.palette.error.main,
          },
          boxSizing: "border-box",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          width: "max-content",
        },
      },
    },
    MuiAutocomplete: {},
    MuiCheckbox: {
      styleOverrides: {
        root: {
          display: "flex",
          color: lightTheme.palette.common.black,
          flexDirection: "row",
          width: "max-content",
        },
      },
    },
    MuiDrawer: {},
  },
});
