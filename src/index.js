import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import HomePage from "./pages/HomePage";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ArticlesPage from "./pages/ArticlesPage";
import CareGuidesPage from "./pages/CareGuidesPage";
import Test from "./components/Test";
import "bootswatch/dist/minty/bootstrap.min.css";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();



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
      {
        path: "/articles",
        element: <ArticlesPage />,
      },
      {
        path: "/articles/:id",
        element: <Test />,
        loader: ({ params }) => {
          console.log(params);
          return null;
        },
      },
      {
        path: "/careGuides",
        element: <CareGuidesPage />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
