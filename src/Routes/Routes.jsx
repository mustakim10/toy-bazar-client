import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";

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
        path: 'alltoys/:id',
        element: <AllToys></AllToys>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
       }

      ]
    }
  ]);
  
  export default router ;