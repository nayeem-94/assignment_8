import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      { path:"home", element:<div>i am home</div> },
      { path:"about", element:<div>i am about</div> },
  },
]);


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />,
)
