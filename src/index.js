import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NeoEmployees } from './components/NeoEmployees.js';

const childRoutes=[
    {
        path:'employees',
        element:<NeoEmployees></NeoEmployees>
    }
]
const rootRoutes=[
    {
        path:'/',
        element: <App />,
        children:childRoutes
    }
]
const employeesrouter=createBrowserRouter(rootRoutes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={employeesrouter}></RouterProvider>
   </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
