/// <reference types="react" />
export interface IChipsProps {
    selected?: boolean;
    onDelete?: any;
    size: "small" | "medium";
    text: string;
    [key: string]: any;
}
declare const Chip: ({ selected, onDelete, size, text, ...otherProps }: IChipsProps) => JSX.Element;
export default Chip;
