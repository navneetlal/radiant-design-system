import { ReactElement } from 'react';
export interface IBadgeProps {
    rounded?: boolean;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    text: string;
    children?: ReactElement;
    size: 'small' | 'medium' | 'large';
    [key: string]: any;
}
declare const Badge: ({ rounded, text, children, size, ...otherProps }: IBadgeProps) => JSX.Element;
export default Badge;
