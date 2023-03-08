import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { About, Blog, Dashboard, Profile, Project } from './pages';
import Linktree from './pages/Linktree';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/linktree",
    element: <Linktree />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
