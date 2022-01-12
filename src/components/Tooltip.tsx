import { Tooltip as MuiTooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';


export interface IToolTipProps {
  title: string;
  children: JSX.Element;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'blackAndWhite' | 'success';
  [key: string]: any;
}

const ToolTip = ({ title, children, color, ...otherProps }: IToolTipProps) => {
    const theme = useTheme();
  return (
    <MuiTooltip title={title} placement="top" arrow {...otherProps} >
      <span>{children}</span>
    </MuiTooltip>
  );
};

ToolTip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
};
export default ToolTip;
