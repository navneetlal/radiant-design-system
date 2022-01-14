/// <reference types="react" />
export interface ICheckboxProps {
    checked?: boolean;
    onChange?: any;
    required?: boolean;
    size?: 'small' | 'medium';
    label?: string;
    reverse?: boolean;
    alert?: boolean;
    [key: string]: any;
}
declare const Checkbox: ({ checked, onChange, required, size, label, reverse, disabled, alert, ...otherProps }: ICheckboxProps) => JSX.Element;
export default Checkbox;
