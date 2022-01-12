// import React, { forwardRef } from 'react';
// import { Typography as MuiTypography } from '@mui/material';
// import { InputBase as MuiInputBase } from '@mui/material';
// import { InputLabel as MuiInputLabel } from '@mui/material';
// import { useAutocomplete } from '@mui/material';
// import { Paper as MuiPaper } from '@mui/material';
// import { ClassNameMap } from '@mui/material';
// import { useTheme } from '@emotion/react';

// export interface IBootstrapInputProps {
//   alert?: boolean;
//   height: 'small' | 'medium';
//   width?: number;
//   classes?: ClassNameMap<string>;
//   disabled?: boolean;
//   value: string;
//   [key: string]: any;
// }

// const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
//   (
//     {
//       alert = false,
//       width = 192,
//       classes,
//       disabled = false,
//       placeholder,
//       height,
//       value,
//       ...otherProps
//     },
//     ref
//   ) => {
//     const theme = useTheme();
//     return (
//       <MuiInputBase
        
//         sx={[
//             {
//                 cursor : disabled ? 'not-allowed' : 'text',
//                 width : width ? width - 24 : 200 - 24,
//                 '&:focus' : {
//                     //@ts-ignore
//                     borderColor : alert ? theme.pallete.error.main : theme.pallete.primary.main,
//                     // backgroundImage: 'url(/images/DropdownIcon.svg)',
//                     // backgroundRepeat: 'no-repeat',
//                     // backgroundPosition: '95% 50%',
//                     // backgroundSize: '8px',
    
//                 }

//             }
//         ]}
//         ref={ref}
//         disabled={disabled}
//         value={value}
//         placeholder={placeholder}
//         {...otherProps}
//       />
//     );
//   }
// );





// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   index: {
//     '&:focus-within': {
//       '&+$listbox': {
//         display: 'block',
//       },
//     },
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   label: {
//     ...theme.typography.h6,
//     color: theme.palette.blackAndWhite.main,
//     '&>span': {
//       color: theme.palette.error.main,
//     },
//   },
//   listbox: {
//     display: 'none',
//     width: ({ width }: any) => width || 200,
//     margin: 0,
//     padding: 0,
//     zIndex: 999,
//     position: 'absolute',
//     // top: 58,
//     '& p': {
//       padding: '8px 16px',
//       cursor: 'pointer',
//       '&:hover': {
//         backgroundColor: theme.palette.primary.contrastText,
//       },
//     },
//     "& p[aria-selected='true']": {
//       backgroundColor: '#fafafa',
//       fontWeight: 600,
//       '& svg': {
//         color: '#1890ff',
//       },
//     },
//     "& p[data-focus='true']": {
//       backgroundColor: '#e6f7ff',
//       cursor: 'pointer',
//       '& svg': {
//         color: theme.palette.blackAndWhite.main,
//       },
//     },
//   },
//   scrollBar: {
//     maxHeight: 180,
//     overflowY: 'scroll',
//     position: 'relative',
//   },
// }));





// export interface IAutoComplete {
//   label?: string;
//   placeholder?: string;
//   required?: boolean;
//   width: number;
//   height: 'small' | 'medium';
//   alert?: boolean;
//   options: any[];
//   value?: {
//     id: number;
//     name: string;
//   };
//   onChange?: any;
//   children?: React.ReactElement;
//   disable?: boolean;
//   onInputChange?: any;
//   [key: string]: any;
// }









// const AutoComplete = ({
//   label,
//   placeholder,
//   required,
//   width,
//   height,
//   alert,
//   options,
//   value,
//   onChange,
//   onInputChange,
//   children,
//   disabled,
//   ...otherProps
// }: IAutoComplete) => {
//   const classes = useStyles({ width });
//   const {
//     getRootProps,
//     getInputLabelProps,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     focused,
//     groupedOptions,
//     ...otherValues
//   } = useAutocomplete({
//     defaultValue: value,
//     options,
//     onChange: (_, v) => {
//       if (onChange) onChange(v);
//     },
//     onInputChange: (e) => {
//       if (onInputChange) onInputChange(e);
//     },
//     value: value,
//     getOptionSelected: (t, v) => t.name === v.name,
//     getOptionLabel: (option) => (option.name ? option.name : ''),
//   });
//   return (
//     <div
//       {...otherProps}
//       style={{
//         position: 'relative',
//       }}
//     >
//       <div className={classes.index} {...getRootProps()}>
//         <MuiInputLabel className={classes.label} {...getInputLabelProps()}>
//           {label} <span>{required && label ? '*' : ''}</span>
//         </MuiInputLabel>
//         <BootstrapInput
//           placeholder={placeholder}
//           required={required}
//           width={width}
//           height={height}
//           disabled={disabled}
//           value={otherValues.value && otherValues.value.name ? otherValues.value.name : ''}
//           {...getInputProps()}
//         />
//       </div>
//       {groupedOptions.length > 0 ? (
//         <MuiPaper elevation={1} className={classes.listbox}>
//           {children}
//           <div
//             {...getListboxProps()}
//             className={classes.scrollBar}
//             onScroll={(e) => e.stopPropagation()}
//           >
//             {groupedOptions.map((option, index) => (
//               <MuiTypography variant="body1" {...getOptionProps({ option, index })}>
//                 {option.name}
//               </MuiTypography>
//             ))}
//           </div>
//         </MuiPaper>
//       ) : otherValues.popupOpen ? (
//         <MuiPaper elevation={1} className={classes.listbox}>
//           {children}
//         </MuiPaper>
//       ) : (
//         ''
//       )}
//     </div>
//   );
// };

// export default AutoComplete;


export {};