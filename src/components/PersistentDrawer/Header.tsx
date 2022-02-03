import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  topnav: {
    width: "auto",
    height: 64,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #bfd2fd",
    // borderBottom: `1px solid ${theme.palette.primary['200']}`,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    minHeight: 64,
    maxHeight: 64,
    borderBottom: "1px solid #bfd2fd",
    // borderBottom: `1px solid ${theme.palette.primary[200]}`,
  },
  brandLogo: {
    height: 64,
    width: "calc(100% - 64px)",
    textAlign: "center",
  },
}));
const Header = ({ brandURL, expanded }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.topnav}>
      <div className={`${classes.flex}`}>
        <div className={classes.brand}>
          {!expanded && (
            <div className={classes.brandLogo}>
              <img alt="brand logo" style={{ height: "75%" }} src={brandURL} />
            </div>
          )}
        </div>
      </div>
      <div className={classes.flex}></div>
    </div>
  );
};

export default Header;
