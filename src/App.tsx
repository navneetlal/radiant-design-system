import {
  Container,
  Grid,
  Pagination,
  Drawer,
  Typography as MuiTypography,
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
import Radio from "./components/Radio/Radio";

import Textbox from "./components/Textbox/Textbox";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Tooltip from "./components/Tooltip/Tooltip";
//import AutoComplete from "./components/Autocomplete/Autocomplete";
import UnCheckedIcon from "./icons/UncheckedIcon/UncheckedIcon";
import Dropdown from "./components/Dropdown/Dropdown";
import Filter from "./components/Filter/Filter";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Tabs from "./components/Tabs/Tabs";

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
  const [tab, setTab] = useState(parseInt("0"));

  const handleDelete = () => {};

  const handleCheckbox = () => {
    setCheck((prevState) => !prevState);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Button
          variant="outlined"
          color="primary"
          // startIcon={<MuiAdjustIcon />}

          text="
          Testing this button"
        />
        <IconButton
          variant="contained"
          color="primary"
          size="medium"
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

        <MultiSelect
          label="Add email addresses"
          autofocus
          placeholder="Type here"
          name="emails"
          width={416}
          onChange={(e: any) => console.log("hello")}
        />
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
          text="testing"
          size="small"
          selected={true}
          onDelete={handleDelete}
        />

        <Snackbar
          open={true}
          message="Label"
          color="success"
          action={<KeyboardArrowUpIcon onClick={handleCheckbox} />}
        />

        <Pagination count={10} color="primary" shape="rounded" />

        <Radio
          checked={check}
          size="small"
          label="radio"
          //disabled={true}
          //alert={true}
          onClick={handleCheckbox}
        />

        <div
          style={{ height: "calc(100% - 89px)", backgroundColor: "#F5F8FF" }}
        >
          <Tabs
            style={{
              width: "100%",
            }}
            initialTabValue={parseInt("0")}
            onTabChange={(value: number) => setTab(value)}
            tabs={[
              {
                label: "Alerts",
              },
              {
                label: "Notifications",
              },
            ]}
          />
          {tab === 0 ? (
            <div
              style={{ width: 1182, height: "calc(100% - 59px)", padding: 40 }}
            >
              <MuiTypography variant="h5" sx={{ marginBottom: "16px" }}>
                All Alerts
              </MuiTypography>
              {/* <AlertsTable /> */}
              <TempComponent />
            </div>
          ) : (
            <div
              style={{ width: 1182, height: "calc(100% - 59px)", padding: 40 }}
            >
              <MuiTypography variant="h5" sx={{ marginBottom: "16px" }}>
                All Notifications
              </MuiTypography>
              {/* <NotificationsTable /> */}
              <TempComponent />
            </div>
          )}
        </div>

        <Switch
          checked={false}
          size="medium"
          colored={true}
          label="Switch"
          disabled={true}
          onChange={handleCheckbox}
        />

        <Grid>
          <Checkbox
            checked={check}
            size="medium"
            aria-label="demo"
            label="hi there"
            onChange={handleCheckbox}
          />
        </Grid>
        <Tooltip title="tooltip" color="dark" size="small" placement="top">
          <span>This is a tooltip</span>
        </Tooltip>

        <Textbox
          placeholder={"Placeholder"}
          label="Label"
          size="medium"
          //alert

          required
          action={{ text: "Add", onClick: handleCheckbox }}
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

      <Dropdown
        placeholder="Text"
        width={150}
        size="medium"
        label="label"
        required
        // alert
        options={[
          { id: 0, name: "Text" },
          { id: 1, name: "Number" },
        ]}
        value={{ id: 1, name: "Testing" }}
        onChange={(e: any) => {
          console.log(e);
          // customHeaders[index].type = e;
          // setCustomHeaders([...customHeaders]);
        }}
      />
      {/* <Filter /> */}
    </Container>
  );
}

export default App;
