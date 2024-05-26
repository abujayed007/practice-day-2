import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/HomePage/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashBoard from "../components/DashBoard";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../components/AllProducts";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'',
                element:<PrivateRoute><DashBoard/></PrivateRoute>,
                loader:() => fetch('http://localhost:3000/users')
            },
            {
                path:'/dashboard/allproducts',
                element:<PrivateRoute><AllProducts/></PrivateRoute>,
            },
            {
                path:'/dashboard/addproduct',
                element:<PrivateRoute><AddProduct/></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/cola')
            },
            {
                path:'/dashboard/update/:id',
                element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader:async ({params}) =>await fetch(`http://localhost:3000/cola/${params.id}`)
            },
        ]
    }
])
