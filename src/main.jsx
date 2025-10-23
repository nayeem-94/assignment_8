
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, href } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home components/Home.jsx';

import Apps from './components/Apps components/Apps.jsx';
import Installation from './components/Installation components/Installation.jsx';
import { Component, Suspense } from 'react';
import PageEror from './components/Errors Pages/PageEror.jsx';



const fetchData = async () => {
  const response = await fetch('/Data.json');
  const data = await response.json();
  return data;
}

// console.log(fetchData());



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/", Component: Home,
        // element:
          // <Suspense fallback={<div>Loading...</div>}>
          //   <Home fetchData={fetchData()} />
          // </Suspense>
      },
      {
        path: "/home",
        //  Component: Home,
        element:
          <Suspense fallback={<div>Loading...</div>}>
            <Home fetchData={fetchData()} />
          </Suspense>
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path: "/github", Component: Apps },
    ],
    errorElement: <PageEror />
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
