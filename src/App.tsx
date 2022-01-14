import {
  Breadcrumbs,
  Container,
  Grid,
  InputLabel,
  Link,
  Pagination,
  Drawer,
  Typography,
} from "@mui/material";
import Checkbox from "./components/Checkbox/Checkbox";

import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Badge from "./components/Badge/Badge";
import Chip from "./components/Chip/Chip";
import Snackbar from "./components/Snackbar/Snackbar";
// import Tooltip from "./components/Tooltip";
import Button from "./components/Button/Button";
import Switch from "./components/Switch/Switch";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import IconButton from "./components/IconButton/Iconbutton";
import Stack from "@mui/material/Stack";
import Radio from "./components/Radio/Radio";

import BootstrapInput from "./components/InputBase/InputBase";
const TempComponent = () => {
  return <p>badge</p>;
};
function App() {
  const theme = useTheme();
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  const handleDelete = () => {
    
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
      
        <Button
          variant="outlined"
          color="secondary"
          // startIcon={<MuiAdjustIcon />}
          text="
          Testing this button"
        />
        <IconButton
          variant="contained"
          color="primary"
          size="small"
          icon={<CheckRoundedIcon />}
          text="Random info"
        />
        <Badge
          badgeContent={5}
          overlap="circle"
          color="error"
          // @ts-ignore
          backgroundcolor={theme.palette.warning.light}
          textcolor={theme.palette.warning.dark}
        >
          <TempComponent />
        </Badge>
        <Breadcrumbs aria-label="breadcrumb" sx={{ m: 4 }} separator=">">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>

        <Chip color="primary" text="testing" size="medium" selected={false} disabled onDelete={handleDelete}/>
        <Snackbar
          open={true}
          message="nice random message to test this thing"
          color="success"
          action={''}
        />
        <Stack spacing={2}>
          <Pagination count={10} color="primary" shape="rounded" />
        </Stack>
        
        {/* <Tooltip title="Sample" color="error">
          <span>This is a tooltip</span>
        </Tooltip> */}

        <InputLabel sx={{ m: 4 }}>
          <span>Random Label</span>
        </InputLabel>
        <BootstrapInput
          placeholder={"Random"}
          required={false}
          width={100}
          alert={false}
          disabled={false}
        />
        <Radio checked={true} size="medium" disabled={false} alert={true}/>

        
        <Checkbox
          checked
          size="medium"
          label="Checkbox"
          aria-label="demo"
          sx={{ m: 4 }}
          disableRipple
        />
        
      </Grid>
      <Switch checked={true} size="small" colored  = {false} label="Switch" disabled={false}/>

      <Drawer
        variant="temporary"
        anchor="right"
        open={drawer}
        onClose={handleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {"This is the content inside the drawer. Random"}
      </Drawer>
    </Container>
  );
}

export default App;
