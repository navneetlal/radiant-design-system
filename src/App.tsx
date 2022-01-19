import {
  Container,
  Grid,
  Pagination,
  Drawer,
  Tabs as MuiTabs,
  Tab,
} from "@mui/material";
import Checkbox from "./components/Checkbox/Checkbox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Badge from "./components/Badge/Badge";
import Chip from "./components/Chip/Chip";
import Snackbar from "./components/Snackbar/Snackbar";
import Button from "./components/Button/Button";
import Switch from "./components/Switch/Switch";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import IconButton from "./components/IconButton/Iconbutton";
import Stack from "@mui/material/Stack";
import Radio from "./components/Radio/Radio";

import Textbox from "./components/Textbox/Textbox";
import Breadcrumbs from "./components/Breadcrumb/Breadcrumb";
import Tooltip from "./components/Tooltip/Tooltip";
import AutoComplete from "./components/Autocomplete/Autocomplete";

const TempComponent = () => {
  return <p>badge</p>;
};
function App() {
  const theme = useTheme();
  const [drawer, setDrawer] = useState(false);
  const [check, setCheck] = useState(true);
  const handleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  const handleDelete = () => {};

  const handleCheckbox = () => {
    
    setCheck((prevState) => !prevState);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Button
          variant="contained"
          color="primary"
          // startIcon={<MuiAdjustIcon />}
          text="
          Testing this button"
          
        />
        <IconButton
          variant="outlined"
          color="primary"
          size="small"
          icon={<CheckRoundedIcon />}
        />

        {/* <AutoComplete
          label="Testing this"
          disable={false}
          placeholder="delhi"
          width={192}
          height="small"
          options={["Delhi", "Mumbai", "Goa", "Chennai"]}
        /> */}
        <Badge
          badgeContent={5}
          overlap="circular"
          color="error"
          rounded
          // @ts-ignore
          backgroundcolor={theme.palette.warning.light}
          textcolor={theme.palette.warning.dark}
        >
          <CheckRoundedIcon />
        </Badge>

        <Breadcrumbs
          text="TMS"
          links={[
            {
              name: "Delhi",
              url: "https://www.figma.com/file/v8m3AEgxYahOv0s5oGbTXm/Intugine-Product-Design-Library-v1.6?node-id=0%3A22012",
            },
            {
              name: "Mumbai",
              url: "https://www.figma.com/file/v8m3AEgxYahOv0s5oGbTXm/Intugine-Product-Design-Library-v1.6?node-id=0%3A22012",
            },
          ]}
        />

        <Chip
          color="primary"
          text="testing"
          size="medium"
          selected={false}
          onDelete={handleDelete}
        />

        <Snackbar
          open={true}
          message="Label"
          color="success"
          action={<KeyboardArrowUpIcon onClick={handleCheckbox} />}
        />

        <Stack spacing={2}>
          <Pagination count={10} color="primary" shape="rounded" />
        </Stack>
        
        <Radio
          checked={check}
          size="medium"
          disabled={true}
          alert={true}
          onClick={handleCheckbox}
        />

        <MuiTabs
          value={"This is a tab"}
          indicatorColor="primary"
          textColor="primary"
          //onChange={handleChange}
          aria-label="disabled tabs example"
        >
          {["Delhi", "Mumbai", "Pune", "Bangalore"].map((item: any) => (
            <Tab label={item} />
          ))}
        </MuiTabs>
        <Switch
          checked={check}
    
          size="small"
          colored={true}
          label="Switch"
          disabled={false}
          onChange={handleCheckbox}
        />
        <Grid>
          <Tooltip title="Sample" color="dark" size="medium">
            <span>This is a tooltip</span>
          </Tooltip>
        </Grid>
        <Grid>
          <Textbox
            placeholder={"Random"}
            required={false}
            width={192}
            label="Testing"
            size="small"
            alert={false}
            disabled={false}
            height="small"
            action={{ text: "Add", onClick: handleCheckbox }}
          />
        </Grid>

        <Grid>
          <Checkbox
            checked={check}
            size="medium"
            aria-label="demo"
            label="hi there"
            disableRipple
            alert
            onChange={handleCheckbox}
          />
        </Grid>
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
