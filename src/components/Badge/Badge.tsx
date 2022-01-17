import React, { ReactElement } from 'react';
import { Badge as MuiBadge } from '@mui/material';
import { useTheme } from '@mui/material';
import { withStyles } from '@mui/styles';

export interface IBadgeProps {
    rounded?: boolean;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    text: string;
    children?: ReactElement;
    size: 'small' | 'medium' | 'large';
    [key: string] : any;

}

const Badge = ({ rounded, color, text, children, size, ...otherProps }: IBadgeProps) => {
    const theme = useTheme()
    return (
        <MuiBadge
            style={{margin : '9rem'}}
            badgeContent={text}
            sx={[
                {
                "& .MuiBadge-badge" : {
                    //@ts-ignore
                    backgroundColor : theme.palette[color].light,
                    color : `1A1A1A`,
                    borderRadius : '4px',
                    fontFamily: '"Source Sans Pro", sans-serif',
                }},
                size === 'small' && {
                    "& .MuiBadge-badge" : {
                        height: '24px',
                        transform: 'scale(1) translate(90%, -50%)',
                        ...theme.typography.body2,
                    }
                },
                size === 'medium' && {
                    "& .MuiBadge-badge" : {
                        height: '32px',
                        transform: 'scale(1) translate(90%, -60%)',
                        ...theme.typography.body1,
                    }        
                },
                        
                size === 'large' && {
                    "& .MuiBadge-badge" : {
                        height: '40px  ',
                        transform: 'scale(1) translate(90%, -70%)',
                        ...theme.typography.subtitle2,

                    }
                },
                !!rounded && {
                    "& .MuiBadge-badge" : {

                        borderRadius: '50%',
                    }
                }
            ]}
            {...otherProps}
        >
            {children}
        </MuiBadge>
    );
};


export const StyledBadge = withStyles((theme) => ({
    badge: {
      border: (props) => (props.border && `2px solid ${theme.palette.background.paper}`) || 0,
      padding: '0 4px',
      backgroundColor: (props) => props.backgroundcolor || theme.palette.background.default,
      color: (props) => props.textcolor || theme.palette.background.default,
    },
  }))(Badge);
  
export default StyledBadge;