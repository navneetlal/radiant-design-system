// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import { lighten } from "@mui/material";
// // import MuiPaginationItem from '@material-ui/lab/PaginationItem';
// // import MuiArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import {
//   Table as MuiTable,
//   TableBody as MuiTableBody,
//   TableCell as MuiTableCell,
//   TableContainer as MuiTableContainer,
//   TableHead as MuiTableHead,
//   TableRow as MuiTableRow,
//   Toolbar as MuiToolbar,
//   Typography as MuiTypography,
//   Paper as MuiPaper,
//   TextField as MuiTextField,
//   MenuItem as MuiMenuItem,
//   Autocomplete as MuiAutocomplete
// } from "@mui/material";
// // import Checkbox from '@material-ui/core/Checkbox';
// import MuiIconButton from "../IconButton/Iconbutton";
// import MuiTooltip from "../Tooltip/Tooltip";
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Switch from '@material-ui/core/Switch';
// import MuiDeleteIcon from '@mui/icons-material/Delete';
// import MuiFilterListIcon from '@mui/icons-material/FilterList';
// import { format as dateFormat } from "date-fns";
// import { LocalizationProvider, DatePicker } from "@mui/lab";
// import DateFnsUtils from "@date-io/date-fns";
// import Button from "../Button/Button";

// // function descendingComparator(a: any, b: any, orderBy: any) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// // function getComparator(order: any, orderBy: any) {
// //   return order === 'desc'
// //     ? (a: any, b: any) => descendingComparator(a, b, orderBy)
// //     : (a: any, b: any) => -descendingComparator(a, b, orderBy);
// // }

// // function stableSort(array: any, comparator: any) {
// //   const stabilizedThis = array.map((el: any, index: number) => [el, index]);
// //   stabilizedThis.sort((a: any, b: any) => {
// //     const order = comparator(a[0], b[0]);
// //     if (order !== 0) return order;
// //     return a[1] - b[1];
// //   });
// //   return stabilizedThis.map((el: any[]) => el[0]);
// // }
// const cellStyles = makeStyles((theme) => ({
//   root: {
//     borderBottom: "none",
//     padding: "14px 8px",
//     color: theme.palette.grey[500],
//     backgroundColor: theme.palette.primary.contrastText,
//     ...theme.typography.h5,
//   },
//   bodyCell: {
//     borderBottom: "none",
//     padding: "12px 8px",
//     ...theme.typography.body2,
//   },
// }));

// const TableCell = ({ children }: any) => {
//   return (
//     <MuiTableCell>{children}</MuiTableCell>
//   );
// };

// const TableHeadCell = ({ children }: any) => {
//   return (
//     <MuiTableCell >{children}</MuiTableCell>
//   );
// };

// const TableRow = withStyles({
//   root: {
//     backgroundColor: "#fff",
//     "&:hover": {
//       backgroundColor: "#fff !important",
//       boxShadow: "0px 2px 2px rgba(26, 26, 26, 0.2) !important",
//     },
//   },
//   selected: {
//     backgroundColor: "#E6EDFA !important",
//     "&:hover": {
//       backgroundColor: "#E6EDFA !important",
//     },
//   },
// })(MuiTableRow);

// // const ArrowDropDownIcon = withStyles((theme) => ({
// //   icon: {
// //     transition: theme.transitions.create(["opacity", "transform"], {
// //       duration: theme.transitions.duration.shorter,
// //     }),
// //     fontSize: 24,
// //     opacity: 0,
// //   },
// //   iconDirectionDesc: {
// //     transform: "rotate(0deg)",
// //   },
// //   iconDirectionAsc: {
// //     transform: "rotate(180deg)",
// //   },
// // }))(MuiArrowDropDownIcon);

// function EnhancedTableHead(props: any) {
//   const {
//     // classes,
//     // onSelectAllClick,
//     // numSelected,
//     // rowCount,
//     // onRequestSort,
//     order,
//     orderBy,
//     RowComponent,
//     CellComponent,
//     headCells,
//   } = props;
//   // const createSortHandler = (property: any) => (event: any) => {
//   //   onRequestSort(event, property);
//   // };

//   return (
//     <MuiTableHead>
//       <RowComponent>
//         {headCells.map((headCell: any, index: number) => (
//           <CellComponent
//             // classes={{ root: { borderBottom: "none" } }}
//             key={index}
//             align="left"
//             sortDirection={orderBy === headCell.fieldName ? order : false}
//             style={{ fontFamily: "Poppins", color: "#666666" }}
//           >
//             {/* <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//               IconComponent={ArrowDropDownIcon}
//               fontSize="medium"
//             > */}
//             {headCell.customName}
//             {/* {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null} */}
//             {/* </TableSortLabel> */}
//           </CellComponent>
//         ))}
//       </RowComponent>
//     </MuiTableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
//   RowComponent: PropTypes.any,
//   CellComponent: PropTypes.any,
//   headCells: PropTypes.any,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === "light"
//       ? {
//           color: theme.palette.primary.main,
//           backgroundColor: lighten(theme.palette.primary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: "1 1 100%",
//   },
// }));

// const EnhancedTableToolbar = (props: any) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <MuiToolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <MuiTypography
//           className={classes.title}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </MuiTypography>
//       ) : (
//         <MuiTypography
//           className={classes.title}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </MuiTypography>
//       )}

//       {numSelected > 0 ? (
//         <MuiTooltip title="Delete">
//           <MuiIconButton aria-label="delete">
//             <MuiDeleteIcon />
//           </MuiIconButton>
//         </MuiTooltip>
//       ) : (
//         <MuiTooltip title="Filter list">
//           <MuiIconButton aria-label="filter list">
//             <MuiFilterListIcon />
//           </MuiIconButton>
//         </MuiTooltip>
//       )}
//     </MuiToolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles(() => ({
//   root: {
//     width: "50px",
//     background: "transparent",
//     backgroundColor: "transparent",
//     flexGrow: 1,
//   },
//   paper: {
//     height: "100%",
//     width: "100%",
//     // marginBottom: theme.spacing(2),
//     background: "transparent",
//     backgroundColor: "transparent",
//     scrollbarColor: "red yellow",
//   },
//   table: {
//     minWidth: 750,
//     borderCollapse: "separate",
//     borderSpacing: "0 10px",
//     marginLeft: "auto",
//     marginRight: "auto",
//     background: "transparent",
//     backgroundColor: "transparent",
//   },
//   visuallyHidden: {
//     border: "none",
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
//   sendButton: {
//     minWidth: 32,
//     backgroundColor: "transparent",
//     position: "absolute",
//     height: 38,
//     right: 18,
//     zIndex: 1,
//   },
// }));

// // const PaginationItem = withStyles({
// //   icon: {
// //     color: '#2C63E5',
// //   },
// // })(MuiPaginationItem);

// export default function EnhancedTable({
//   // rowsPerPage,
//   // page,
//   // onInputSend,
//   height,
//   rows,
//   headCells,
//   onRowClick,
//   onColumnInputChange,
//   TableRowComponent = TableRow,
//   TableCellComponent = TableCell,
//   TableHeadRowComponent = MuiTableRow,
//   TableHeadCellComponent = TableHeadCell,
//   componentSet,
//   uniqueField,
// }: any) {
//   const classes = useStyles();
//   const [order] = React.useState("asc");
//   const [orderBy] = React.useState("calories");
//   const [selected] = React.useState([]);
//   const [inputState, setInputState]: any = React.useState({});

//   const inputStateHandler = (keys: string[], values: any[]) => {
//     setInputState((state: any) => {
//       const newState: any = { ...state };
//       keys.forEach((key: string, i: number) => {
//         newState[key] = values[i];
//       });
//       return newState;
//     });
//   };

//   // const handleRequestSort = (event: any, property: any) => {
//   //   const isAsc = orderBy === property && order === "asc";
//   //   setOrder(isAsc ? "desc" : "asc");
//   //   setOrderBy(property);
//   // };

//   // const handleSelectAllClick = (event) => {
//   //   if (event.target.checked) {
//   //     // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
//   //     const newSelecteds = rows.map((n) => n.name);
//   //     setSelected(newSelecteds);
//   //     return;
//   //   }
//   //   setSelected([]);
//   // };

//   // const handleClick = (event: any, name: any) => {
//   //   // @ts-expect-error ts-migrate(7005) FIXME: Variable 'newSelected' implicitly has an 'any[]' t... Remove this comment to see the full error message
//   //   const selectedIndex = selected.indexOf(name);
//   //   let newSelected: any[] = [];

//   //   if (selectedIndex === -1) {
//   //     // @ts-expect-error ts-migrate(7005) FIXME: Variable 'newSelected' implicitly has an 'any[]' t... Remove this comment to see the full error message
//   //     newSelected = newSelected.concat(selected, name);
//   //   } else if (selectedIndex === 0) {
//   //     // @ts-expect-error ts-migrate(7005) FIXME: Variable 'newSelected' implicitly has an 'any[]' t... Remove this comment to see the full error message
//   //     newSelected = newSelected.concat(selected.slice(1));
//   //   } else if (selectedIndex === selected.length - 1) {
//   //     // @ts-expect-error ts-migrate(7005) FIXME: Variable 'newSelected' implicitly has an 'any[]' t... Remove this comment to see the full error message
//   //     newSelected = newSelected.concat(selected.slice(0, -1));
//   //   } else if (selectedIndex > 0) {
//   //     newSelected = newSelected.concat(
//   //       selected.slice(0, selectedIndex),
//   //       selected.slice(selectedIndex + 1)
//   //     );
//   //   }

//   //   setSelected(newSelected);
//   // };

//   // // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//   // const isSelected = (name) => selected.indexOf(name) !== -1;

//   // // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//   // const emptyRows =
//   //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   // const handleKeyPress = (e) => {
//   //   if (e.key === "Enter") onInputSend && onInputSend();
//   // };

//   React.useEffect(() => {
//     setInputState({});
//   }, [rows]);

//   return (
//     <div className={classes.root}>
//       <MuiPaper className={classes.paper} elevation={0}>
//         {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
//         <MuiTableContainer
//           style={{
//             border: "none",
//             margin: 0,
//             boxSizing: "border-box",
//             maxHeight: height || "auto",
//           }}
//         >
//           <MuiTable
//             stickyHeader
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size="medium"
//             aria-label="enhanced table"
//           >
//             {/* @ts-ignore */}
//             <EnhancedTableHead
//               classes={{ ...classes }}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               // onSelectAllClick={handleSelectAllClick}
//               // onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//               RowComponent={TableHeadRowComponent}
//               CellComponent={TableHeadCellComponent}
//               headCells={headCells}
//             />

//             <MuiTableBody>
//               {
//                 // stableSort(rows, getComparator(order, orderBy))
//                 rows
//                   // .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
//                   .map((row: any, index: number) => {
//                     return (
//                       <TableRowComponent
//                         hover
//                         // onClick={(event) => handleClick(event, row.name)}
//                         onClick={() => (onRowClick ? onRowClick(row) : null)}
//                         role="checkbox"
//                         tabIndex={-1}
//                         key={index}
//                         color={row.__material_table_row_color__}
//                         style={{ cursor: onRowClick ? "pointer" : "default" }}
//                       >
//                         {headCells.map((headCell: any, index: number) => {
//                           const value =
//                             row[headCell.fieldName] ||
//                             row.items?.[0]?.[headCell.fieldName] ||
//                             row.miscellaneous?.[headCell.fieldName] ||
//                             "";
//                           return (
//                             <TableCellComponent
//                               style={{
//                                 whiteSpace: "nowrap",
//                                 position: "relative",
//                               }}
//                               key={index}
//                             >
//                               {headCell?.miscellaneous?.component ? (
//                                 componentSet[
//                                   headCell?.miscellaneous.componentName
//                                 ]({
//                                   value: row[headCell.fieldName],
//                                   row: row,
//                                   headCell,
//                                 })
//                               ) : headCell?.miscellaneous?.input ? (
//                                 headCell.dataType === "string" ? (
//                                   !Boolean(headCell.miscellaneous.options) ? (
//                                     <div style={{ position: "relative" }}>
//                                       <Button
//                                         size="small"
//                                         variant="text"
//                                         text="send"
//                                         className={classes.sendButton}
//                                         onClick={(e: any) => {
//                                           e.stopPropagation();
//                                           onColumnInputChange(
//                                             headCell,
//                                             row,
//                                             inputState[
//                                               row[uniqueField] +
//                                                 headCell.fieldName
//                                             ] || value
//                                           );
//                                         }}
//                                       />
//                                       <MuiTextField
//                                         variant="outlined"
//                                         size="small"
//                                         type="text"
//                                         value={
//                                           inputState[
//                                             row[uniqueField] +
//                                               headCell.fieldName
//                                           ] || value
//                                         }
//                                         // to stop opening timeline on clicking the input field
//                                         onClick={(e) => e.stopPropagation()}
//                                         // onKeyPress={handleKeyPress}
//                                         onChange={(e) =>
//                                           inputStateHandler(
//                                             [
//                                               row[uniqueField] +
//                                                 headCell.fieldName,
//                                             ],
//                                             [e.target.value]
//                                           )
//                                         }
//                                         style={{
//                                           width: 200,
//                                         }}
//                                       />
//                                     </div>
//                                   ) : headCell.miscellaneous.autoComplete ? (
//                                     <>
//                                       <Button
//                                         size="small"
//                                         variant="text"
//                                         text="send"
//                                         className={classes.sendButton}
//                                       />
//                                       <MuiAutocomplete
//                                         options={headCell.miscellaneous.options}
//                                         freeSolo
//                                         // implement following line when using autocomplete
//                                         //value=?
//                                         // to stop opening timeline on clicking the input field

//                                         renderInput={(params) => (
//                                           <MuiTextField
//                                             {...params}
//                                             onClick={(e) => e.stopPropagation()}
//                                             // onKeyPress={handleKeyPress}
//                                             style={{
//                                               width: 200,
//                                             }}
//                                             variant="outlined"
//                                             size="small"
//                                           />
//                                         )}
//                                       />
//                                     </>
//                                   ) : (
//                                     <MuiTextField
//                                       variant="outlined"
//                                       size="small"
//                                       type="text"
//                                       value={value}
//                                       // to stop opening timeline on clicking the input field
//                                       onClick={(e) => e.stopPropagation()}
//                                       onChange={(e) =>
//                                         onColumnInputChange(
//                                           headCell,
//                                           row,
//                                           e.target.value
//                                         )
//                                       }
//                                       select
//                                       style={{
//                                         width: 200,
//                                       }}
//                                       SelectProps={{
//                                         MenuProps: {
//                                           style: {
//                                             maxHeight: 270,
//                                             width: 250,
//                                           },
//                                         },
//                                       }}
//                                     >
//                                       {headCell.miscellaneous.options.map(
//                                         (option: any, index: number) => (
//                                           <MuiMenuItem
//                                             value={option}
//                                             key={index}
//                                           >
//                                             <MuiTypography
//                                               style={{
//                                                 whiteSpace: "break-spaces",
//                                               }}
//                                             >
//                                               {option}
//                                             </MuiTypography>
//                                           </MuiMenuItem>
//                                         )
//                                       )}
//                                     </MuiTextField>
//                                   )
//                                 ) : (
//                                   <LocalizationProvider utils={DateFnsUtils}>
//                                     <div onClick={(e) => e.stopPropagation()}>
//                                       <DatePicker
//                                         format="yyyy/MM/dd"
//                                         inputVariant="outlined"
//                                         size="small"
//                                         variant="inline"
//                                         value={
//                                           value ? new Date(value) : new Date()
//                                         }
//                                         onChange={(date) =>
//                                           onColumnInputChange(
//                                             headCell,
//                                             row,
//                                             date
//                                           )
//                                         }
//                                         style={{
//                                           width: 200,
//                                         }}
//                                       />
//                                     </div>
//                                   </LocalizationProvider>
//                                 )
//                               ) : (
//                                 <MuiTypography
//                                   variant="body2"
//                                   style={{
//                                     minWidth: `${
//                                       100 + headCell.customName.length
//                                     }px`,
//                                   }}
//                                 >
//                                   {value &&
//                                     (headCell.dataType === "date"
//                                       ? new Date(value).toString() ===
//                                         "Invalid Date"
//                                         ? "Invalid Date"
//                                         : dateFormat(
//                                             new Date(value),
//                                             "dd-MM-yyyy"
//                                           )
//                                       : headCell.dataType === "time"
//                                       ? new Date(value).toString() ===
//                                         "Invalid Date"
//                                         ? "Invalid Date"
//                                         : dateFormat(new Date(value), "hh:mm a")
//                                       : value)}
//                                 </MuiTypography>
//                               )}
//                             </TableCellComponent>
//                           );
//                         })}
//                       </TableRowComponent>
//                     );
//                   })
//               }
//               {/* {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )} */}
//             </MuiTableBody>
//           </MuiTable>
//         </MuiTableContainer>
//         {/* <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         /> */}
//       </MuiPaper>
//       {/* <div style={{margin: '36px', padding: '10px'}}>
//           <div style={{float: 'left'}}>
//             <MuiTypograp variant="body2">Showing <span style={{fontFamily: "Poppins", fontWeight: 500}}>185</span> of <span style={{fontFamily: "Poppins", fontWeight: 500}}>2000</span></MuiTypograp>
//           </div>
//           <div style={{float: 'right'}}>
//             <Pagination count={10} shape="rounded" color="primary" renderItem={(items) => <PaginationItem {...items} />} />
//           </div>
//       </div> */}
//     </div>
//   );
// }


export {};