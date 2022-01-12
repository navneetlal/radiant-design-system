// import {
//   Switch as MuiSwitch,
//   Typography as MuiTypography,
// } from '@mui/material';

// import { useTheme } from '@mui/material';

// const styles = {
//   small: {
//     root: {
//       width: 28,
//       height: 16,
//     },
//     switchBase: {
//       transform: 12,
//     },
//     thumb: {
//       width: 12,
//       height: 12,
//     },
//   },
//   medium: {
//     root: {
//       width: 36,
//       height: 20,
//     },
//     switchBase: {
//       transform: 16,
//     },
//     thumb: {
//       width: 16,
//       height: 16,
//     },
//   },
// } as const;

// const useStyles = makeStyles<
//   Theme,
//   {
//     type: keyof typeof styles;
//     disabled: boolean;
//     colored: any;
//     checked: boolean;
//   }
// >((theme) => ({
//   root: {
//     width: ({ type }) => styles[type].root.width,
//     height: ({ type }) => styles[type].root.height,
//     padding: 0,
//     display: 'flex',
//   },
//   disabled: {
//     '& + $track': {
//       backgroundColor: ({ colored }) =>
//         `${theme.palette[colored ? 'error' : 'primary'].light}!important`,
//       opacity: `${1}!important`,
//     },
//     color: `${theme.palette.blackAndWhite.light} !important`,
//     '&$checked': {
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: ({ colored }) =>
//           `${theme.palette[colored ? 'success' : 'primary'].light}!important`,
//         borderColor: ({ colored }) =>
//           `${theme.palette[colored ? 'success' : 'primary'].light}!important`,
//       },
//     },
//   },
//   switchBase: {
//     padding: 2,
//     color: 'white',
//     '&$checked': {
//       transform: ({ type }) => `translateX(${styles[type].switchBase.transform / 1}px)`,
//       color: 'white',
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: ({ colored, disabled }) =>
//           theme.palette[colored ? 'success' : 'primary'][disabled ? 'light' : 'main'],
//         borderColor: ({ colored, disabled }: any) =>
//           theme.palette[colored ? 'success' : 'primary'][disabled ? 'light' : 'main'],
//       },
//     },
//   },
//   checked: {
//     transform: ({ type }) => `translateX(${styles[type].switchBase.transform})px`,
//   },
//   thumb: {
//     width: ({ type }) => `${styles[type].thumb.width}px !important`,
//     height: ({ type }) => `${styles[type].thumb.height}px !important`,
//     boxShadow: 'none',
//   },
//   track: {
//     height: ({ type }) => styles[type].root.height,
//     borderRadius: 50,
//     opacity: 1,
//     backgroundColor: ({ colored }: any) => theme.palette[colored ? 'error' : 'primary'].main,
//   },
//   label: {
//     display: 'flex',
//     '&>p': {
//       marginRight: '4px',
//     },
//   },
// }));

// export interface ISwitchProps {
//   checked?: any;
//   onChange?: any;
//   label?: string;
//   name?: string;
//   size?: 'small' | 'medium';
//   disabled?: any;
//   colored?: boolean;
//   required?: boolean;
//   [key: string]: any;
// }

// const Switch = ({
//   checked,
//   onChange,
//   label,
//   name,
//   size,
//   disabled,
//   colored,
//   required,
//   ...otherProps
// }: ISwitchProps) => {
//   const classes = useStyles({
//     type: size || 'medium',
//     colored,
//     checked,
//     disabled,
//   });
//   const theme = useTheme();
//   return (
//     <div className={classes.label}>
//       {label ? (
//         <MuiTypography variant={size === 'small' ? 'body2' : 'body1'}>{label}</MuiTypography>
//       ) : (
//         ''
//       )}

//       <MuiSwitch
//         checked={checked}
//         onChange={onChange}
//         name={name}
//         disabled={disabled}
//         sx={[
//             {
//                 width : `${styles}.${size}.root.width`,
//                 height : `${styles}.${size}.root.height`,
//                 padding:0,
//                 display:'flex',
//             },
//             disabled && {
//                 '& + $track' : {
//                     backgroundColor : `${theme.palette[colored ? 'error' : 'primary'].light}!important`,
//                     opacity: `${1}!important`
//                 },
//                 color : `fff !important`,
//                 '&$checked' : {
//                     '& + $track' : {
//                         opacity : 1,
//                         backgroundColor : `${theme.palette[colored ? 'success' : 'primary'].light}!important`,
//                         borderColor : `${theme.palette[colored ? 'success' : 'primary'].light}!important`
//                     }
//                 }
//             },
//         ]}
//         {...otherProps}
//       />
//     </div>
//   );
// };

// export default Switch;
export {}