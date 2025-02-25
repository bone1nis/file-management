import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import ChartPage from "../pages/ChartPage";
import CreateFolderPage from "../pages/CreateFolderPage";
import HomePage from "../pages/HomePage";
import TreePage from "../pages/TreePage";
import ResizablePanel from "../components/ResizablePanel";
import TreeView from "../components/TreeView";
import FlatChart from "../components/FlatChart";
import FolderForm from "../components/FolderForm";

const rootRoute = createRootRoute({
  component: () => {
    return (
      <Outlet />
    );
  },
});

const chartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chart",
  component: ChartPage,
});

const createFolderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create-folder",
  component: CreateFolderPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const treeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tree",
  component: TreePage,
});

const panelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/panel",
  component: () => (
    <ResizablePanel
      content={
        <>
          <FolderForm />
          <FlatChart />
          <TreeView />
        </>
      }
    />
  ),
});

const routeTree = rootRoute.addChildren([
  chartRoute,
  createFolderRoute,
  indexRoute,
  treeRoute,
  panelRoute,
]);

export const router = createRouter({
  routeTree
});

export const routes = [
  { to: "/file-management/", label: "Главная" },
  { to: "/create-folder", label: "Создать папку" },
  { to: "/panel", label: "Панель" },
  { to: "/chart", label: "График" },
  { to: "/tree", label: "Дерево" },
];

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
