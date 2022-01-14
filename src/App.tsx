import {
  Autocomplete,
  Breadcrumbs,
  Container,
  Grid,
  InputLabel,
  Link,
  Pagination,
  Drawer,
  TextField,
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

  return (
    <Container maxWidth="lg">
      <Grid container>
      <Switch checked={true} size="small" colored  = {true} label="Switch" disabled={false}/>

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
          rounded={true}
          text={"4"}
          size="large"
          overlap="circle"
          color="error"
          // @ts-ignore
          backgroundcolor={theme.palette.warning.light}
          // @ts-ignore
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

        <Chip color="primary" text="testing" size="medium" selected={false}/>

        <Snackbar
          open={true}
          message="Random testing message"
          color="primary"
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

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["hello world", "testing this thing"]}
          sx={{ width: 300, m: 4 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <Checkbox
          checked
          size="medium"
          label="Checkbox"
          aria-label="demo"
          sx={{ m: 4 }}
          disableRipple
        />
      </Grid>

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
