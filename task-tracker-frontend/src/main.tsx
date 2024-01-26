import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root.tsx"
import ErrorPage from './components/errorPage.jsx';
import ChildComponent from './components/childComponent.tsx';
import NewTask from './components/NewTask.jsx';
import Home from './components/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/children",
        element: <ChildComponent/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewTask/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
