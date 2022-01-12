// import { Radio as MuiRadio } from '@mui/material';
// import { useTheme } from '@mui/material';
// const useStyles = makeStyles((theme) => ({
  
//   checkBox: {
//     padding: '9px 9px 9px 0',
//     color: ({ disabled, alert }: any) =>
//       disabled
//         ? theme.palette.secondary.main
//         : alert
//         ? theme.palette.error.main
//         : theme.palette.primary.main,
//   },
// }));

// export interface IRadioProps {
//   checked?: boolean;
//   onChange?: any;
//   required?: boolean;
//   size: 'small' | 'medium';
//   label?: string;
//   disabled?: boolean;
//   reverse?: boolean;
//   alert?: boolean;
//   [key: string]: any;
// }

// const Radio = ({
//   reverse,
//   checked,
//   onChange,
//   required,
//   size = 'medium',
//   label,
//   disabled,
//   alert,
//   ...otherProps
// }: IRadioProps) => {
//     const theme = useTheme();
//   const classes = useStyles({ reverse, disabled, alert });
//   return (
//     <div style={{
//         display : 'flex',
//         flexDirection : reverse ? 'row-reverse' : 'row',
//         width : 'max-content',
         
           
//     }}>
//       <MuiRadio
//         checked={checked}
//         onChange={onChange}
//         required={required}
//         disabled={disabled}
//         size={size}
//         disableRipple
//         disableTouchRipple
//         disableFocusRipple
//         color="primary"
//         {...otherProps}
//         sx={[
//             {
//                 '&>p' : {
//                     color : disabled ? theme.palette.secondary.contrastText : '#1A1A1A'
//                 }
//             },
//             size === 'small' && {
//                 '& svg': {
//                     fontSize: 12,
//                   },
//                   '&>p': {
//                     ...theme.typography.body2,
//                   },
//                   '&>span': {
//                     width: 16,
//                     boxSizing: 'border-box',
//                     padding: 0,
//                   },
//             },
//             size === 'medium' && {
//                 '& svg': {
//                     fontSize: 16,
//                   },
//                   '&>p': {
//                     ...theme.typography.body1,
//                   },
//                   '&>span': {
//                     width: 24,
//                     boxSizing: 'border-box',
//                     padding: 0,
//                   },
//             }
//         ]}
//       />
//       {label ? <p>{label}</p> : ''}
//     </div>
//   );
// };

// export default Radio;


export {}