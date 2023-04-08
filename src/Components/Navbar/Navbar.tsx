//css
import "./Navbar.css";

//routing
import { HOME_ROUTE, LOGIN_ROUTE } from "../../consts/routeConsts";
import { useHistory } from "react-router-dom";


const Navbar = () => {
  let history = useHistory();

  return (
    <div className="navbarElements">
      <div id="navbarTitle" onClick={() => { history.push(HOME_ROUTE); }}>למד לי</div>
      <div id="navbarLogin" onClick={() => { history.push(LOGIN_ROUTE); }}>התחבר</div>
    </div>
  );
};

export default Navbar;
