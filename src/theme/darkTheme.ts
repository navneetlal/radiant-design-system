import { createTheme } from "@mui/material/styles";
import typography from './typography.json';

import type { TypographyOptions } from "@mui/material/styles/createTypography";

export let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: "#91B0FA",
            main: "#2C63E5",
            dark: "#264CA4"
        },
        secondary: {
            light: "#F2F2F2",
            main: "#C7C7C7",
            dark: "#666666"
        },
        error: {
            light: "#F9D7D7",
            main: "#FF5757",
            dark: "#CC3333"
        },
        warning: {
            light: "#FFECDB",
            main: "#F2984A",
            dark: "#D97E2E"
        },
        success: {
            light: "#C2FAEA",
            main: "#00C28B",
            dark: "#008F66"
        }
    },
    typography: {
        ...typography as TypographyOptions
    },
});

darkTheme = createTheme(darkTheme, {
    components: {
        MuiButton: {
            styleOverrides: {
                sizeSmall: {
                    minWidth: 118,
                    height: 32,
                    ...darkTheme.typography.h6,
                    padding: "8px 16px",
                    textTransform: "none",
                },
                sizeMedium: {
                    minWidth: 144,
                    height: 40,
                    ...darkTheme.typography.h5,
                    padding: "10px 24px",
                    textTransform: "none",
                },
                sizeLarge: {
                    minWidth: 193,
                    height: 48,
                    ...darkTheme.typography.h4,
                    padding: "12px 32px",
                    textTransform: "none",
                },
                disabled: {
                    backgroundColor: darkTheme.palette.secondary.light + " !important",
                    color: '#A1A1A1' + " !important",
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    color: darkTheme.palette.primary.light,
                    height: "32px", // medium
                    transform: "scale(1) translate(90%, -60%)",
                    borderRadius: "50%",
                    ...darkTheme.typography.body1,
                },

            },
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    color: darkTheme.palette.secondary.dark,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                sizeSmall: {
                    width: "auto",
                    height: 32,
                    padding: "8px 0px",
                    ...darkTheme.typography.body2,
                    borderRadius: 5000,
                },
                sizeMedium: {
                    height: 40,
                    padding: "10px 0px",
                    ...darkTheme.typography.body1,
                    borderRadius: 5000,
                },
                root: {
                    backgroundColor: darkTheme.palette.primary.main,
                    "&:focus": {
                        backgroundColor: darkTheme.palette.primary.main,
                    },
                    "&:hover": {
                        backgroundColor: darkTheme.palette.primary.dark,
                    },
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    minWidth: 860,
                    padding: "8px 16px",
                    //color : darkTheme.palette.primary.light
                },
            },
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.primary.main,
                },
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    ...darkTheme.typography.body2,
                    height: 32,
                    "& ul>li>button:hover": {
                        color: darkTheme.palette.info.main,
                    },
                    "& ul>li>button:hover.Mui-selected": {
                        color: darkTheme.palette.info.dark,
                    },
                    "& svg": {
                        fill: darkTheme.palette.primary.main,
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
                    color: darkTheme.palette.primary[600],
                },
                tooltipPlacementTop: {
                    //@ts-ignore
                    backgroundColor: darkTheme.palette.primary[600],
                    //@ts-ignore
                    border: `1px solid ${darkTheme.palette.primary[200]}`,
                    borderRadius: 4,
                    ...darkTheme.typography.body2,
                    padding: "4px 8px",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "label + &": {
                        marginTop: darkTheme.spacing(1),
                    },
                },
                input: {
                    borderRadius: 4,
                    position: "relative",
                    ...darkTheme.typography.body2,
                    border: `1px solid ${darkTheme.palette.secondary.main}`,
                    width: 192,
                    cursor: "pointer",
                    borderColor: darkTheme.palette.secondary.main,
                    alignSelf: "flex-end",
                    height: 32,
                    padding: "8px 12px",
                    "&:focus": {
                        borderColor: darkTheme.palette.primary.main,
                    },
                    "&:not(:placeholder-shown):invalid": {
                        borderColor: darkTheme.palette.error.main,
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
                    color: darkTheme.palette.common.black,
                    flexDirection: "row",
                    width: "max-content",
                },
            },
        },
        MuiDrawer: {},
    },
});
