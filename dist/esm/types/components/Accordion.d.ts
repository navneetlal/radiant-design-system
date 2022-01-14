import React from 'react';
export interface IAccordionProps {
    title?: string;
    expanded?: boolean;
    children?: React.ReactElement;
}
declare const Accordion: ({ expanded, children, title }: IAccordionProps) => JSX.Element;
export default Accordion;
