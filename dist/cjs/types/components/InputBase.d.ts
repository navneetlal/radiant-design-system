import { ClassNameMap } from "@mui/material";
import React from 'react';
export interface IBootstrapInputProps {
    alert?: boolean;
    height: "small" | "medium";
    width?: number;
    classes?: ClassNameMap<string>;
    disabled?: boolean;
    value: string;
    [key: string]: any;
}
declare const BootstrapInput: React.ForwardRefExoticComponent<Pick<IBootstrapInputProps, keyof IBootstrapInputProps> & React.RefAttributes<any>>;
export default BootstrapInput;
