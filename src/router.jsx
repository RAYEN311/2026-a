import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import NotFound from "./views/NotFound";
// import NotFound from "./views/NotFound";


const router = createBrowserRouter([
  {
    path: '',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
  
])

export default router;














// {
//   path: "*",
//   element: <NotFound/>
// }