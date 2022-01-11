import { ReactElement } from 'react';
import { Badge as MuiBadge } from '@mui/material';
import { useTheme } from '@mui/material';

export interface IBadgeProps {
    rounded?: boolean;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    text: string;
    children: ReactElement;
    size: 'small' | 'medium' | 'large';
    [key: string]: any;
}

const Badge = ({ rounded, text, children, size = 'medium', ...otherProps }: IBadgeProps) => {
    const theme = useTheme()
    return (
        <MuiBadge
            badgeContent={text}
            sx={[
                size === 'small' && {
                    height: '24px',
                    transform: 'scale(1) translate(90%, -50%)',
                    ...theme.typography.body2,
                },
                size === 'medium' && {
                    height: '32px',
                    transform: 'scale(1) translate(90%, -60%)',
                    ...theme.typography.body1,
                },
                size === 'large' && {
                    height: '40px  ',
                    transform: 'scale(1) translate(90%, -70%)',
                    ...theme.typography.subtitle2,
                },
                !!rounded && {
                    borderRadius: '50%',
                },

            ]}
            {...otherProps}
        >
            {children}
        </MuiBadge>
    );
};

export default Badge;
