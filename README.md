# File Management

Application for managing files with a tree, a resizing panel, the ability to add new folders, a flat graph

### Technologies:

React
TypeScript
MUI
TanStack Router


## Installing of the project

Before you start the project, you need to install everything you need. To do this, take the following steps

## Install all dependencies:

```
npm i
```

## Running a project locally

```
npm run dev
```

## Build a project

```
npm run build
```

## Structure

1. **`/src/`** — Папка с исходным кодом приложения:
   - **`/components/`** — Папка, где находятся все компоненты используемые в приложении
   - **`/components/FlatChart.tsx`** — Компонент с плоским графиком.
   - **`/components/FolderForm.tsx`** — Компонент представляющий форму для создания папок.
   - **`/components/Menu.tsx`** — Компонент для создания навигационного меню приложения.
   - **`/components/ResizablePanel.tsx`** — Компонент для ресайзабельной пали, обеспечивающий возможность изменения ширины панели пользователем (drag-and-drop механизм для изменения размеров).
   - **`/components/TreeView.tsx`** — Компонент для отображения древовидной структуры данных.

   - **`/pages/`** — Папка со страницами, которые используются в приложении.

   - **`/context/`** — Папка предназначенная для управления глобальным состоянием Context API.
   - **`/context/TreeContext.tsx`** — Файл, предназначенный для создания Contex, управления древовидной структурой данных.
   - **`/context/TreeProvider.tsx`** — Файл, предназначенный для создания Context Provider.

   - **`/routes/`** — Папка с настройками маршрутиризации в приложении.
   - **`/routes/routes.tsx`** — Файл с конфигурацией маршрутов.

   - **`/main.tsx`** — Входная точка приложения, главный компонент.

2. **`/public/`** — Папка со статистическими ресурсами
   - **`/favocion.png`** — Иконка для приложения.