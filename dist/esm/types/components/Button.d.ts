import React from 'react';
export interface IButtonProps {
    variant?: 'outlined' | 'contained' | 'text';
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
    size?: 'small' | 'medium' | 'large';
    text?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    [key: string]: any;
}
declare const Button: ({ variant, color, size, text, leftIcon, rightIcon, ...otherProps }: IButtonProps) => JSX.Element;
export default Button;
