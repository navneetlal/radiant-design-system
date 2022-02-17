import React from "react";
import { useMemo } from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import MuiTypography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import BreadcrumbArrow from "../../icons/BreadcrumbArrowIcon/BreadcrumbArrowIcon";

import type { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import { mergeDeep } from "../../utils/deepMerge";

export interface IBreadcrumbsProps extends BreadcrumbsProps {
  /**
   * Add the Links to be displayed
   */
  links: {
    name: string;
    url?: string;
  }[];
  text: string;
}
const Breadcrumbs = ({ links, text, sx }: IBreadcrumbsProps) => {
  const theme = useTheme();
  const originalSx = {
    color: `${theme.palette.grey[650]} !important`,
    height: "20px",
    textDecoration: "none",
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);

  return (
    <MuiBreadcrumbs separator={<BreadcrumbArrow />} aria-label="breadcrumb">
      <MuiTypography variant="body1" color="textPrimary">
        {text}
      </MuiTypography>
      {links.map((item, index) => (
        <MuiLink
          color="primary"
          href={item.url}
          sx={finalSx}
          key={`${item.name}-${item.url}`}
        >
          {item.name}
        </MuiLink>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
