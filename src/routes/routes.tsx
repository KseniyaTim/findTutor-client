// components
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../consts/routeConsts";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: REGISTER_ROUTE,
    component: Register,
  },
];
export default RouteMaster;
