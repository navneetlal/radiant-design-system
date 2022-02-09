import React, { useState, useEffect, useCallback } from "react";

import { Grid as MuiGrid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import LinearProgress from "@mui/material/LinearProgress";
import { useDropzone } from "react-dropzone";

import DeleteIcon from "../../icons/DeleteIcon";
import UpdateIcon from "../../icons/UpdateIcon";
import TickIcon from "../../icons/TickIcon";
import MaxFileUploadAlert from "../../icons/MaxFileUploadAlert";
import { Box } from "@mui/material";
import EditIcon from "../../icons/EditIcon";
import { Button, IconButton } from "../..";

import { convertTableToExcel } from "./xlsxParser";

//import MapHeader from "./MapHeaders";

const File = ({
  name,
  onUploadComplete,
  ids,
  onDelete,
  setSuccessfullyUploaded,
  setFile,
}: any) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 10);
      }, 500);
    } else {
      setUploading(true);
      onUploadComplete({ data: "the data has been uploaded successfully" });
    }
  }, [progress]);

  const deleteFile = () => {
    onDelete(ids);
    setSuccessfullyUploaded(false);
    setUploading(false);
    setProgress(0);
    setFile(null);
  };

  return (
    <MuiGrid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {uploading && (
        <MuiGrid item xs={12} justifyContent="center" component={MuiGrid}>
          <img src="/images/UploadSuccess.png" />
        </MuiGrid>
      )}
      <MuiGrid item>
        <p>{name}</p>
      </MuiGrid>

      {uploading ? (
        <MuiGrid
          container
          item
          style={{ display: "flex", width: 32 }}
          spacing={1}
        >
          <MuiGrid item>
            <IconButton
              size="small"
              variant="outlined"
              color="error"
              icon={<DeleteIcon />}
              onClick={deleteFile}
            />
          </MuiGrid>
        </MuiGrid>
      ) : (
        <LinearProgress
          sx={{ width: 100 }}
          variant="determinate"
          value={progress}
        />
      )}
    </MuiGrid>
  );
};

const UploadFile = ({
  mapHeader,
  onUploadComplete,
  headerMapped,
  //setMapHeaderSaved,
  onReset,
  ids,
  onDelete,
}: any) => {
  const theme = useTheme();
  const [file, setFile] = useState<any>(null);
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    [file]
  );
  const [successfullyUploaded, setSuccessfullyUploaded] =
    useState<boolean>(false);
  React.useEffect(() => {
    setSuccessfullyUploaded(false);
  }, [file]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        width: "770px",
        height: "450px",
        borderRadius: "8px",
        boxShadow: "0px 20px 40px rgba(44, 99, 229, 0.1)",
        backgroundColor: theme.palette.common.white,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "32px 0" }}>
        <Typography variant="h4" color="textSecondary">
          Upload Excel/CSV
        </Typography>
      </Box>
      <Box>
        <Box>
          <Box
            {...getRootProps()}
            sx={{
              height: "255px",
              width: "610px",
              backgroundColor: theme.palette.primary.contrastText,
              border: "2px dashed black",
              borderColor: theme.palette.primary.main,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {file ? (
              <MuiGrid container sx={{ width: "max-content" }}>
                <MuiGrid item>
                  <File
                    name={file.name}
                    onUploadComplete={(res: any) => {
                      onUploadComplete(file, res);
                      setSuccessfullyUploaded(true);
                    }}
                    ids={ids}
                    onDelete={onDelete}
                    setSuccessfullyUploaded={setSuccessfullyUploaded}
                    setFile={setFile}
                  />
                </MuiGrid>
              </MuiGrid>
            ) : (
              <>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography variant="body2">
                    Drop the files here ...
                  </Typography>
                ) : (
                  <Box>
                    <Button
                      text="Select File"
                      size="small"
                      variant="contained"
                      color="primary"
                    />
                    <Typography variant="h5" style={{ marginTop: 16 }}>
                      or drop file here
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
      {!successfullyUploaded ? (
        <>
          <Box sx={{ padding: "16px 0", width: "100%", paddingLeft: 80 }}>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              sx={{
                paddingBottom: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <MaxFileUploadAlert fillColor={theme.palette.warning.main} />
              <span style={{ marginLeft: 8 }}>
                Max. entries allowed :{" "}
                <span style={{ color: "#000" }}>999</span>
              </span>
            </Typography>
            <Typography variant="body1" align="left" sx={{ paddingBottom: 4 }}>
              Data in the file should be in correct format.
              <Box
                component={"span"}
                onClick={() =>
                  convertTableToExcel([
                    ...mapHeader.fixed.map((item: any) => item.column_name),
                    ...mapHeader.dynamic.map((item: any) => item.column_name),
                  ])
                }
                sx={{
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  marginLeft: "2px",
                }}
              >
                Download the .xlsx template here.
              </Box>
            </Typography>
            {!headerMapped && (
              <Typography variant="body1" align="left">
                Please
                <Box
                  component={"span"}
                  sx={{
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                    marginLeft: "2px",
                    marginRight: "2px",
                  }}
                  onClick={handleOpen}
                >
                  map the table headers
                </Box>
                in case your file has different headers than the template above.
              </Typography>
            )}
          </Box>
          {headerMapped && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                paddingLeft: 80,
              }}
            >
              <TickIcon fillColor={theme.palette.success.main} />
              <Typography
                variant="body1"
                style={{ marginLeft: 8, marginRight: 20 }}
              >
                Table headers mapped
              </Typography>
              <Button
                variant="text"
                style={{ marginRight: 20 }}
                text="Edit"
                leftIcon={<EditIcon />}
                color="primary"
                onClick={handleOpen}
              />
              <Button
                variant="text"
                text="Reset"
                leftIcon={<UpdateIcon />}
                color="error"
                onClick={onReset}
              />
            </Box>
          )}
          {/* <MapHeader
            open={open}
            data={mapHeader}
            setClose={handleOpen}
            onSave={setMapHeaderSaved}
          /> */}
        </>
      ) : (
        ""
      )}
    </Box>
  );
};

export default UploadFile;
