import { Checkbox as MuiCheckbox } from '@mui/material';
import { Typography as MuiTypography } from '@mui/material';
import { useTheme } from '@mui/material';

// import CheckIcon from '../icons/CheckIcon';
// import UnCheckedIcon from '../icons/UnCheckedIcon';


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
const Checkbox = ({
  checked,
  onChange,
  required,
  size = 'medium',
  label,
  reverse = false,
  disabled,
  alert,
  ...otherProps
}: ICheckboxProps) => {
    const theme = useTheme();
  return (
    <div>
      <MuiCheckbox
        //checkedIcon={<CheckIcon />}
        //icon={<UnCheckedIcon alert={alert} />}
        size={size}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        disableRipple
        color="primary"
        sx={
            [
                {
                    flexDirection : reverse ? 'row-reverse' : 'row',
                    '& svg' : {
                        width : size === 'small' ? 16 : 20,
                        height : size === 'small' ? 16 : 20
                    },
                    '&>span' : {
                        padding : 0,
                        paddingRight : size === 'small' ? 0 : 4
                    }
                }
            ]


        }
        {...otherProps}
      />
      {label ? (
        <MuiTypography
          variant={size === 'small' ? 'body2' : 'body1'}
          sx={[
              disabled && {
                color: theme.palette.secondary.main,
                cursor: 'not-allowed',
              }
          ]}
        >
          {label}
        </MuiTypography>
      ) : (
        ''
      )}
    </div>
  );
};

export default Checkbox;
