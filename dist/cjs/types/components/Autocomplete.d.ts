import React from "react";
import { ClassNameMap } from "@mui/material";
export interface IBootstrapInputProps {
    alert?: boolean;
    height: "small" | "medium";
    width?: number;
    classes?: ClassNameMap<string>;
    disabled?: boolean;
    value: string;
    [key: string]: any;
}
export interface IAutoComplete {
    label?: string;
    placeholder?: string;
    required?: boolean;
    width: number;
    height: "small" | "medium";
    alert?: boolean;
    options: any[];
    value?: {
        id: number;
        name: string;
    };
    onChange?: any;
    children?: React.ReactElement;
    disable?: boolean;
    onInputChange?: any;
    [key: string]: any;
}
declare const AutoComplete: ({ label, placeholder, required, width, height, alert, options, value, onChange, onInputChange, children, disabled, ...otherProps }: IAutoComplete) => JSX.Element;
export default AutoComplete;
