import { Box, Card, useTheme } from "@mui/material";
import { ReactNode } from "@tanstack/react-router";

import Menu from "./Menu";

type ResizablePanel = {
  content: ReactNode
}

const ResizablePanel: React.FC<ResizablePanel> = ({content}) => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={() => ({
        minWidth: 400,
        maxWidth: 800,
        resize: "horizontal",
        overflow: "auto",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "clamp(300px, 50%, 700px)",
        transition: "transform 0.3s, border 0.3s",
        padding: "15px",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          padding: 0,
        },
        [theme.breakpoints.down("md")]: {
          minWidth: "50%",
          maxWidth: "100%",
        },
      })}
    >
      <Menu />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {content}
      </Box>
    </Card>
  );
};

export default ResizablePanel;
