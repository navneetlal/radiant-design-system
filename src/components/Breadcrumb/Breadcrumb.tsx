import React from 'react';

import {
  Breadcrumbs as MuiBreadcrumb,
  Typography as MuiTypography,
  Link as MuiLink,
} from '@mui/material';

import { useTheme } from '@mui/material';

import BreadcrumbArrow from '../../icons/BreadcrumbArrow';


export interface IBreadcrumbsProps {
  links: {
    name: string;
    url?: string;
  }[];
  text: string;
}
const Breadcrumbs = ({ links, text }: IBreadcrumbsProps) => {
    const theme = useTheme();
  return (
    <MuiBreadcrumb separator={<BreadcrumbArrow />} aria-label="breadcrumb">
      <MuiTypography variant="body1" color="textPrimary">
        {text}
      </MuiTypography>
      {links.map((item, index) => (
        <MuiLink color="primary" href={item.url} sx = {[{
            color : `${theme.palette.secondary.dark} !important`,
            height :'20px',
            textDecoration : 'none',
            
        }]} key={index}>
          {item.name}
        </MuiLink>
      ))}
    </MuiBreadcrumb>
  );
};

export default Breadcrumbs;
