import { useState } from "react";

import { Box, Button, TextField, useTheme, Alert } from "@mui/material";

import { useTreeContext } from "../context/TreeContext";

const FolderForm: React.FC = () => {
  const theme = useTheme();

  const { selectNode, handleAddTree } = useTreeContext();

  const [folderName, setFolderName] = useState("");
  const [warning, setWarning] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (folderName) {
      setWarning(false);
      if (selectNode) {
        handleAddTree(folderName, selectNode);
      } else {
        handleAddTree(folderName);
      }
    } else {
      setWarning(true);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <TextField
          id="outlined-required"
          label="Имя папки"
          onChange={handleInput}
          value={folderName}
        />
        <Button type="submit" variant="contained">
          Создать папку
        </Button>
      </Box>
      {warning && <Alert severity="warning">Имя папки обязательно</Alert>}
    </Box>
  );
};

export default FolderForm;
