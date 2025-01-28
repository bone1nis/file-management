import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "@tanstack/react-router";

import Menu from "./Menu";
import { useState } from "react";

type ResizablePanel = {
  content: ReactNode;
};

const ResizablePanel: React.FC<ResizablePanel> = ({ content }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const maxWidth = isSmall ? window.innerHeight : 800;
  const minWidth = isSmall ? window.innerHeight * 0.5 : 400;
  const [width, setWidth] = useState((maxWidth + minWidth) / 2);

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      setWidth(Math.min(Math.max(e.clientX, minWidth), maxWidth));
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Stack
      sx={() => ({
        minWidth,
        maxWidth,
        width,
        position: "relative",
        overflow: "auto",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "100vh",
        transition: "transform 0.3s, border 0.3s",
      })}
    >
      <Menu />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {content}
      </Box>
      <Box
        onMouseDown={handleMouseDown}
        sx={{
          width: "1px",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.12)",
          cursor: "e-resize",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
    </Stack>
  );
};

export default ResizablePanel;
