import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
       {
        path: '/' ,
        element: <Home></Home>
       },
       {
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'signup',
        element: <SignUp></SignUp>
       },
       {
        path: 'blogs',
        element: <Blogs></Blogs>
       },
       {
        path: 'allToys/:id',
        element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-bazar-server-orcin.vercel.app/categories/${params.id}`)
       },
       {
        path: '/myToy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
       }

      ]
    }
  ]);
  
  export default router ;