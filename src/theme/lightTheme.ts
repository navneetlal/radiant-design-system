import { createTheme } from "@mui/material/styles";
import typography from "./typography.json";

import type { TypographyOptions } from "@mui/material/styles/createTypography";

let lightTheme = createTheme({
  palette: {
    mode: "light",
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
        root: {
          "&.Mui-disabled": {
            backgroundColor: lightTheme.palette.secondary.light + " !important",
            color: "#A1A1A1" + " !important",
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
          minWidth: 360,
          padding: "8px 16px",
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
          border: `1px solid ${lightTheme.palette.primary[200]}`,
          borderRadius: 4,
          //@ts-ignore
          backgroundColor: lightTheme.palette.primary[600],
          //@ts-ignore
          color: lightTheme.palette.blackAndWhite.light,
          ...lightTheme.typography.body2,

          padding: "4px 8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "label + &": {
            // marginTop: lightTheme.spacing(1),
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
          //@ts-ignore
          color: `${lightTheme.palette.blackAndWhite.main} !important`,

          boxSizing: "border-box",
        },
        sizeSmall: {
          ...lightTheme.typography.body2,
          height: 30 - 16,
        },
        sizeMedium: {
          ...lightTheme.typography.body1,
          height: 38 - 16,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          display: "flex",
          width: "max-content",
          '&>span:hover': {
            backgroundColor: 'transparent !important',
          },
        },
      },
    },
    MuiAutocomplete: {},
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '9px 9px 9px 0',
    
        }
      },
    },
    MuiDrawer: {},
    MuiTabs : {
      root : {
        textTransform: 'none',
        color: lightTheme.palette.common.black,
        borderBottom: `1px solid ${lightTheme.palette.secondary.main}`,
        ...lightTheme.typography.h5,
        maxWidth: '100%',
        minWidth: '50%',
        '&:hover': {
          color: lightTheme.palette.primary.main,
        },
      }
    }
  },
});

export default lightTheme;
