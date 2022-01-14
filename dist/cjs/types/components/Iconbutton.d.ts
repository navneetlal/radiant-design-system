import React from 'react';
export interface IButtonProps {
    variant?: 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'blackAndWhite' | 'success';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactElement;
    [key: string]: any;
}
declare const IconButton: ({ variant, color, size, text, icon, ...otherProps }: IButtonProps) => JSX.Element;
export default IconButton;
