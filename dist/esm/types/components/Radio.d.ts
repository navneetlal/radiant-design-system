/// <reference types="react" />
export interface IRadioProps {
    checked?: boolean;
    onChange?: any;
    required?: boolean;
    size: "small" | "medium";
    label?: string;
    disabled?: boolean;
    reverse?: boolean;
    alert?: boolean;
    [key: string]: any;
}
declare const Radio: ({ reverse, checked, onChange, required, size, label, disabled, alert, ...otherProps }: IRadioProps) => JSX.Element;
export default Radio;
