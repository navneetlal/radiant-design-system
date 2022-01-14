/// <reference types="react" />
import PropTypes from 'prop-types';
export interface IToolTipProps {
    title: string;
    children: JSX.Element;
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'blackAndWhite' | 'success';
    [key: string]: any;
}
declare const ToolTip: {
    ({ title, children, color, ...otherProps }: IToolTipProps): JSX.Element;
    propTypes: {
        text: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export default ToolTip;
