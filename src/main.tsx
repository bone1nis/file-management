import { createRoot } from "react-dom/client";

import { RouterProvider } from "@tanstack/react-router";
import { CssBaseline } from "@mui/material";

import { router } from "./routes/routes";

import TreeProvider from "./context/TreeProvider";

createRoot(document.getElementById("root")!).render(
  <TreeProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </TreeProvider>
);
