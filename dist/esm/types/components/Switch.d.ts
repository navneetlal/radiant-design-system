/// <reference types="react" />
export interface ISwitchProps {
    checked?: any;
    onChange?: any;
    label?: string;
    name?: string;
    size?: "small" | "medium";
    disabled?: any;
    colored?: boolean;
    required?: boolean;
    [key: string]: any;
}
declare const Switch: ({ checked, onChange, label, name, size, disabled, colored, required, ...otherProps }: ISwitchProps) => JSX.Element;
export default Switch;
