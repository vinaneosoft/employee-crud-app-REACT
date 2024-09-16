import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { NeoEmployees } from './components/NeoEmployees.js';
import { Home } from './components/Home.js';
import { EmployeeForm } from './components/EmployeeForm.js';
import { AdminLogin } from './components/AdminLogin.js';

const childRoutes=[
    {
        path:"/",
        loader:()=>redirect('home') 
    },
    {
        path:'employees',
        element:<NeoEmployees></NeoEmployees>
    },
    {
        path:'home',
        element:<Home></Home>
    },
    {
        path:'addemployee',
        element:<EmployeeForm></EmployeeForm>
    },
    {
        path:'editemployee/:_id', /* _id : it will hold router parameter */
        element:<EmployeeForm></EmployeeForm>
    },
    {
        path:'adminlogin',
        element:<AdminLogin></AdminLogin>
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
    <RouterProvider router={employeesrouter}></RouterProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
