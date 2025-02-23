
import { createRoot } from 'react-dom/client'
import * as React from "react";
import Home from './components/Home/Home';
import About from './components/About/about';
import Contact from './components/Contact/Contact';
import App from './App.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
