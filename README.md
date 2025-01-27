# File Management

Application for managing files with a tree, a resizing panel, the ability to add new folders, a flat graph

## Technologies:

### React
### TypeScript
### MUI
### TanStack Router


## Installing of the project

Before you start the project, you need to install everything you need. To do this, take the following steps

### Install all dependencies:

```
npm i
```

### Running a project locally

```
npm run dev
```

### Build a project

```
npm run build
```

### Structure

1. **`/src/`** — Folder with the application source code:
    - **`/components/`** — Folder with all components used in the application
        - **`/components/FlatChart.tsx`** — Component with a flat chart.
        - **`/components/FolderForm.tsx`** — Component representing a form for creating folders.
        - **`/components/Menu.tsx`** — Component for creating the application navigation menu.
        - **`/components/ResizablePanel.tsx`** — Component for a resizable panel, providing the ability to change the panel width by the user (drag-and-drop mechanism for changing sizes).
        - **`/components/TreeView.tsx`** — Component for displaying a tree-like data structure.

    - **`/pages/`** — Folder with pages used in the application.

    - **`/context/`** — Folder for managing the global state of the Context API.
        - **`/context/TreeContext.tsx`** — File for creating Contex, managing the tree data structure.
        - **`/context/TreeProvider.tsx`** — File for creating Context Provider.

    - **`/routes/`** — Folder with routing settings in the application.
        - **`/routes/routes.tsx`** — File with route configuration.

    - **`/main.tsx`** — Application entry point, main component.

2. **`/public/`** — Folder with statistical resources
    - **`/favocion.png`** — Application icon.