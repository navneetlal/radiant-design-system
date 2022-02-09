import React, { useState } from "react";

import MuiGrid from "@mui/material/Grid";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import AddIcon from "../../icons/Add";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbArrow from "../../icons/BreadcrumbArrow";
import CutIcon from "../../icons/CutIcon";
import Header from "../../components/Header";
import Dialog from "../../molecules/Dialog";

export interface IBulkUploadHeader {
  links: {
    name: string;
    url?: string;
  }[];
  onCancel: any;
  text: string;
  nextButtonProps: object;
  
}

const BulkUploadHeader = ({
  links,
  onCancel,
  text,
  nextButtonProps,
}: IBulkUploadHeader) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  
  const theme = useTheme();

  return (
    <Header>
      <MuiBox
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: 40,
        }}
      >
        <Breadcrumbs text={text} links={links} />
        <MuiTypography
          variant="h3"
          sx={{ ...theme.typography.h3, margin: 0, paddingTop: 8 }}
        >
          <MuiGrid container spacing={2} direction="row">
            <IconButton style={{ padding: "0 14px" }} onClick={handleOpen}>
              <CutIcon />
            </IconButton>
            <Dialog
              message="Are you sure you want to cancel this operation?"
              open={open}
              setClose={handleOpen}
              onClickYes={onCancel}
              onClickNo={handleOpen}
            />
            <MuiGrid item> Bulk Upload</MuiGrid>
          </MuiGrid>
        </MuiTypography>
      </MuiBox>

      <MuiBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: '24px',
        }}
      >
        <MuiGrid container spacing={2} alignItems="center">
          <MuiGrid item>
            <Button
              text="Cancel"
              size="small"
              variant="outlined"
              color="secondary"
              leftIcon={<AddIcon />}
              onClick={onCancel}
            />
          </MuiGrid>
          <MuiGrid item>
            <Button
              text="Next"
              size="small"
              variant="contained"
              color="primary"
              disabled
              rightIcon={<BreadcrumbArrow />}
              {...nextButtonProps}
            />
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </Header>
  );
};

export default BulkUploadHeader;
