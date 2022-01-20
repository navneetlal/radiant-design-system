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
        disabled : {
          //backgroundColor : `${lightTheme.palette.secondary.contrastText} !important`,
        }
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
          color : lightTheme.palette.primary.main,
          "& ul>li>button:hover": {
            backgroundColor: `rgba(0, 0, 0, 0.04)`
            
          },
          "& ul>li>button:hover.Mui-selected": {
            color: lightTheme.palette.primary.contrastText,
            backgroundColor: lightTheme.palette.primary.main
          },
          "& ul>li>button:hover.Mui-selected:hover" : {
            //@ts-ignore
            backgroundColor: lightTheme.palette.primary[600]
          },
          "& svg": {
            fill: lightTheme.palette.primary.main,
          },
        },
      },
    },

    // MuiSwitch: {
    //   variants : [
    //     {
    //       props : {checked : true},
    //       style : {
    //         padding : 2,
    //         color : 'pink',
    //         '&$checked' : {

    //         }
    //       }
    //     }
    //   ],
    //   // styleOverrides: {
    //   //   switchBase: {
    //   //     padding: 2,
    //   //     color: "white",
    //   //     "&$checked": {
    //   //       color: "white",
    //   //       variants: [
    //   //         {
    //   //           props: { size: "small" },
    //   //           style: {
    //   //             transform: `translateX(12/1)px`,
    //   //           },
    //   //         },
    //   //       ],
    //   //     },
    //   //     "& + $track": {
    //   //       opacity: 1,
    //   //       variants: [
    //   //         {
    //   //           props: { colored: true, disabled: true },
    //   //           style: {
    //   //             backgroundColor: lightTheme.palette.success.light,
    //   //           },
    //   //         },
    //   //         {
    //   //           props: { colored: true, disabled: false },
    //   //           style: {
    //   //             backgroundColor: lightTheme.palette.success.main,
    //   //           },
    //   //         },
    //   //         {
    //   //           props: { colored: false, disabled: true },
    //   //           style: {
    //   //             backgroundColor: lightTheme.palette.primary.light,
    //   //           },
    //   //         },
    //   //         {
    //   //           props: { colored: false, disabled: false },
    //   //           style: {
    //   //             backgroundColor: lightTheme.palette.primary.main,
    //   //           },
    //   //         },
    //   //       ],
    //   //     },
    //   //   },
    //   // },
    // },
    MuiTooltip : {
      styleOverrides : {
        // tooltip : (props : any) => ({
        //   ...props.size === "small" && {
        //     ...lightTheme.typography.h1
        //   }
        // })
      }
    },

    MuiRadio: {
      // variants : [
      //   {
      //     props : {disabled : true},
      //     style : {
      //       color : lightTheme.palette.secondary.main
      //     }
      //   },
      //   {
      //     props : {disabled : false,alert : true},
      //     style : {
      //       color : lightTheme.palette.error.main,
      //     }
      //   },
      //    {
      //      props : {disabled : false , alert : false},
      //      style : {
      //        color : lightTheme.palette.primary.main
      //      }
      //    }
      // ],
    },
    MuiAutocomplete: {},
    MuiCheckbox: {
      styleOverrides: {
        root : {
          

        },
        disabled: {
          color: lightTheme.palette.secondary.main,
          cursor: "not-allowed",
        },
      },
    },
    MuiDrawer: {},
    MuiTab: {
      root: {
        textTransform: "none",
        color: lightTheme.palette.common.black,
        borderBottom: `1px solid ${lightTheme.palette.secondary.main}`,
        ...lightTheme.typography.h5,
        maxWidth: "100%",
        minWidth: "50%",
        "&:hover": {
          color: lightTheme.palette.primary.main,
        },
      },
    },
  },
});

export default lightTheme;

const tempTheme = createTheme({
  components: {
    MuiButton : {
      styleOverrides : {
        outlined : (props) => ({
          //@ts-ignore
            color : lightTheme.palette[props.color].main,
            backgroundColor: `#ffffff`,
            border: `1px solid`,
            //@ts-ignore
          
            borderColor: `${lightTheme.palette[props.color].main}`,
            "&:hover": {
              //@ts-ignore
          
              backgroundColor: props.color !== 'secondary' && `${lightTheme.palette[props.color].contrastText}`,
            },       
        })
      }
    },
    


  }

})
    
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
  
