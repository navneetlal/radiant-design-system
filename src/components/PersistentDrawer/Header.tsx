import React from "react";
import MuiBox from "@mui/material/Box";

const Header = ({ brandURL, expanded }: any) => {
  return (
    <MuiBox
      sx={{
        width: "auto",
        height: "64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #bfd2fd",
      }}
    >
      <MuiBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MuiBox
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            minHeight: "64px",
            maxHeight: "64px",
            borderBottom: "1px solid #bfd2fd",
          }}
        >
          {!expanded && (
            <MuiBox
              sx={{
                height: "64px",
                width: "calc(100% - 64px)",
                textAlign: "center",
              }}
            >
              <img alt="brand logo" style={{ height: "75%" }} src={brandURL} />
            </MuiBox>
          )}
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></MuiBox>
    </MuiBox>
  );
};

export default Header;
