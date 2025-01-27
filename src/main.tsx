import { createRoot } from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'
import { CssBaseline } from '@mui/material'

import TreeProvider from './context/TreeProvider'

import { router } from './routes/routes'


createRoot(document.getElementById('root')!).render(
  <TreeProvider>
    <CssBaseline/>
    <RouterProvider router={router}/>
  </TreeProvider>
)