import React from 'react';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link'
import MuiTypography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

import BreadcrumbArrow from '../../icons/BreadcrumbArrow/BreadcrumbArrow';

import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

export interface IBreadcrumbsProps extends BreadcrumbsProps {
  links: {
    name: string;
    url?: string;
  }[];
  text: string;
}
const Breadcrumbs = ({ links, text }: IBreadcrumbsProps) => {
  const theme = useTheme();
  return (
    <MuiBreadcrumbs separator={<BreadcrumbArrow />} aria-label="breadcrumb">
      <MuiTypography variant="body1" color="textPrimary">
        {text}
      </MuiTypography>
      {links.map((item, index) => (
        <MuiLink color="primary" href={item.url} sx={[{
          color: `${theme.palette.grey[650]} !important`,
          height: '20px',
          textDecoration: 'none',
        }]} key={`${item.name}-${item.url}`}>
          {item.name}
        </MuiLink>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
