import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, href } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home.jsx';

import Apps from './components/Apps.jsx';
import Installation from './components/Installation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/", Component: Home,
      },
      {
        path: "/home", Component: Home
      },
      { path: "/apps", Component:Apps },
      { path: "/installation", Component: Installation },
      { path: "/github" ,Component:Apps  },
    ],
    errorElement: <div> 404 not found </div>
  },
  
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
