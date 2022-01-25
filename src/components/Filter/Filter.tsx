import React, { useState } from 'react';
import {
  Button as MuiButton,
  Drawer as MuiDrawer,
  Typography as MuiTypography,
  IconButton as MuiIconButton,
} from '@mui/material';
import Scrollbar from 'react-perfect-scrollbar';
import ArrowLeft from '../../icons/ArrowLeft/arrowLeft';
import MuiAdjustIcon from '@mui/icons-material/Adjust';
function Filter(props: any) {
  const { children } = props;
  const [panelOpen, setPanelOpen] = useState(false);

  const handlePanelToggle = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <>
      <MuiButton
        variant="outlined"
        color="primary"
        onClick={handlePanelToggle}
        startIcon={<MuiAdjustIcon />}
      >
        Filters
      </MuiButton>
      <MuiDrawer
        variant="temporary"
        anchor="right"
        open={panelOpen}
        onClose={handlePanelToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="flex filter">
          <div className="content-wrap position-relative ">
            <div className="filter__header flex items-center">
              <MuiIconButton>
                <ArrowLeft />
              </MuiIconButton>
              <MuiTypography variant="h4">Filter</MuiTypography>
            </div>
            <Scrollbar className="scrollable-content">
              <div className="content">{children}</div>
            </Scrollbar>
            <div className="filter__action">
              <MuiButton fullWidth variant="contained" color="primary" className="mb-4">
                Apply
              </MuiButton>
              <MuiButton variant="outlined" fullWidth>
                Clear All
              </MuiButton>
            </div>
          </div>
        </div>
      </MuiDrawer>
    </>
  );
}

export default Filter;
