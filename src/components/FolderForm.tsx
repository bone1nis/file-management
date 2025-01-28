import { useState } from "react";

import { Box, Button, TextField, Alert } from "@mui/material";

import { useTreeContext } from "../context/TreeContext";

const FolderForm: React.FC = () => {
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
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 5,
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
