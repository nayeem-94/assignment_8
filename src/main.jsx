
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
import Detailapp from './components/Apps components/Detailapp.jsx';



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
        path: "/", //Component: Home,
        element:
          <Suspense fallback={<span className="loading flex justify-center items-center loading-spinner loading-lg"></span>}>
            <Home fetchData={fetchData()} />
          </Suspense>
      },
      {
        path: "/home",
        //  Component: Home,
        element:
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Home fetchData={fetchData()} />
          </Suspense>
      },

      {
        path: "/home/:id",
        element: (
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Detailapp />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/Data.json");
          const data = await res.json();
          return data.find((d) => d.id === parseInt(params.id));
        }

      },

      {
        path: "/apps", //Component: Apps
        element:
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <Apps fetchData={fetchData()} />
          </Suspense>
      },
      { path: "/installation", Component: Installation },
    ],
    errorElement: <PageEror />
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
