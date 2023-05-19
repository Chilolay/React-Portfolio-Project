import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import HomePage from './pages/HomePage'
// import { ParallaxProvider } from "react-scroll-parallax";
import RootLayout from './layout/RootLayout'
import ErrorPage from './pages/ErrorPage';
import "bootswatch/dist/minty/bootstrap.min.css";
import './index.css';
import "font-awesome/css/font-awesome.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

