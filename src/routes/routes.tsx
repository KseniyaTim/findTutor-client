// components
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeacherSearch from "../Pages/TeacherSearch/TeacherSearch";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../consts/routeConsts";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    component: Navbar,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: REGISTER_ROUTE,
    component: Register,
  },
  {
    path: TEACHER_SEARCH_ROUTE,
    component: TeacherSearch,
  },
];
export default RouteMaster;
