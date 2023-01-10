import React from 'react';
import { Provider } from 'react-redux';
import Forecast from './routes/forecast/Forecast';
import Search from './routes/search/Search';
import Home from './routes/home/Home'
import './index.css';
import { store } from './app/store';
import ReactDOM from "react-dom/client";
import Root from './routes/root/Root'
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
        path: "/home",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
      path: "forecast",
      element: <Forecast />,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
        <RouterProvider router={router} />
  </Provider >
);