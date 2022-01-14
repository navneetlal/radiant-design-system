import React from 'react';
export interface ISnackbarProps {
    open: boolean;
    message: string;
    color: "primary" | "error" | "warning" | "success";
    action?: string | React.ReactElement;
    handleClose?: any;
    [key: string]: any;
}
declare const Snackbar: ({ open, message, color, action, handleClose, ...otherProps }: ISnackbarProps) => JSX.Element;
export default Snackbar;
