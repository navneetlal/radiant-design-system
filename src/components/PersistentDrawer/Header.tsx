import React from "react";
import Box from "@mui/material/Box";

const Header = ({ brandURL, expanded }: any) => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #bfd2fd",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
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
            <Box
              sx={{
                height: "64px",
                width: "calc(100% - 64px)",
                textAlign: "center",
              }}
            >
              <img alt="brand logo" style={{ height: "75%" }} src={brandURL} />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
