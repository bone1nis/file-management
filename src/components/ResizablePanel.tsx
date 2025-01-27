import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "@tanstack/react-router";

import Menu from "./Menu";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

type ResizablePanel = {
  content: ReactNode;
};

const ResizablePanel: React.FC<ResizablePanel> = ({ content }) => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const maxWidth = isSmall ? document.documentElement.clientWidth * 0.7 : 700;
  const minWidth = isSmall ? document.documentElement.clientWidth * 0.5 : 500;
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

  useEffect(() => {
    const handleResize = () => {
      const newMaxWidth = isSmall
        ? document.documentElement.clientWidth * 0.7
        : 700;
      const newMinWidth = isSmall
        ? document.documentElement.clientWidth * 0.5
        : 500;
      setWidth((newMaxWidth + newMinWidth) / 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmall, width]);

  return (
    <Stack
      sx={() => ({
        minWidth,
        maxWidth,
        width,
        position: "relative",
        overflow: "auto",
        height: "100vh",
        transition: "transform 0.3s, border 0.3s",
      })}
      direction={{ xs: "column", sm: "row" }}
    >
      <Menu />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
        }}
      >
        {content}
      </Box>
      <Box
        onMouseDown={handleMouseDown}
        sx={{
          width: "1px",
          height: "100%",
          backgroundColor: grey[300],
          cursor: "e-resize",
          position: "absolute",
          top: 0,
          right: 0,
          userSelect: "none",
        }}
      />
    </Stack>
  );
};

export default ResizablePanel;
