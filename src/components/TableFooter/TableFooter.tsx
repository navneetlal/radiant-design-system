import React from "react";

import MuiGrid from '@mui/material/Grid';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import MuiTypography from '@mui/material/Typography';
import MuiPagination from '@mui/material/Pagination';
import MuiBox from '@mui/material/Box';
import { useTheme }  from "@mui/material/styles";

import usePagination from "../../hooks/usePagination";


const TableFooter = ({ totalTableCount, onChange }: any) => {
  const theme = useTheme();
  const { page, pageSize, handlePageChange, handlePageSizeChange } =
    usePagination({
      onChange,
    });
  const handleSelect = (e: any) => handlePageSizeChange(e.target.value);
  return (
    <MuiBox
      sx={{
        padding: "16px 40px 0 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MuiTypography variant="body2">
        Showing{" "}
        <MuiBox component={"span"} sx={{ ...theme.typography.h6 }}>
          {page * pageSize > totalTableCount
            ? totalTableCount
            : page * pageSize}
        </MuiBox>{" "}
        of{" "}
        <MuiBox component={"span"} sx={{ ...theme.typography.h6 }}>
          {totalTableCount}
        </MuiBox>
      </MuiTypography>
      <MuiGrid
        item
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <MuiTypography variant="body2" style={{ paddingRight: "5px" }}>
          Rows per page:
        </MuiTypography>
        <MuiSelect
          variant="outlined"
          onChange={handleSelect}
          defaultValue={pageSize}
          sx={{
            width: "60px",
            height: "30px",
            backgroundColor: "white",
          }}
        >
          {[10, 20, 30]?.map((item, index) => (
            <MuiMenuItem value={item} key={index}>
              {item}
            </MuiMenuItem>
          ))}
        </MuiSelect>
        <MuiPagination
          count={Math.ceil(totalTableCount / pageSize)}
          page={page}
          onChange={handlePageChange}
        />
      </MuiGrid>
    </MuiBox>
  );
};
export default TableFooter;
