import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import About from './pages/about'
import Logement from './pages/logement'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Root />,
        children: [
            {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
},
      ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
