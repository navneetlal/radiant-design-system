import {
  Autocomplete,
  Badge,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  Container,
  Grid,
  InputBase,
  InputLabel,
  Link,
  Pagination,
  Radio,
  Snackbar,
  Drawer,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Button variant="contained" sx={{ m: 4 }} onClick={handleDrawer}>
          Hello
        </Button>
        <Badge badgeContent={4} color="primary" sx={{ m: 7 }}>
          hello
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

        <Chip color="primary" label="testing" sx={{ m: 4 }} />

        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={true}
          message="Random testing message"
          action={" "}
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
