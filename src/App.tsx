import {
  Autocomplete,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  Grid,
  InputBase,
  InputLabel,
  Link,
  Pagination,
  Radio,
  Drawer,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useTheme } from "@emotion/react";
import Badge from "./components/Badges";
import Chip from "./components/Chip";
import Snackbar from "./components/Snackbar";

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
        <Button
          variant="outlined"
          size="large"
          color="error"
          onClick={handleDrawer}
        >
          Hello
        </Button>
        <Button
          variant="outlined"
          size="medium"
          color="warning"
          onClick={handleDrawer}
        >
          Click Me HI Siddhant
        </Button>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={handleDrawer}
        >
          Yes
        </Button>

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

        <Chip color="primary" text="testing" size="medium" selected={false} />

        <Snackbar
          open={true}
          message="Random testing message"
          color="primary"
        />
        <Pagination
          sx={{ m: 4 }}
          count={2}
          shape="rounded"
          color="primary"
          page={1}
        />

        <Switch checked={true} sx={{ m: 4 }} />

        <Tooltip title="Sample" placement="top" sx={{ m: 4 }} arrow>
          <span>This is a tooltip</span>
        </Tooltip>

        <InputLabel sx={{ m: 4 }}>
          <span>Random Label</span>
        </InputLabel>
        <InputBase
          style={{ width: "100%" }}
          sx={{ m: 4 }}
          autoFocus
          placeholder="Some random data"
        />

        <Radio checked={true} color="primary" sx={{ m: 4 }} />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["hello world", "testing this thing"]}
          sx={{ width: 300, m: 4 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <Checkbox
          defaultChecked
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
