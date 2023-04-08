//css
import "./Navbar.css";

//routing
import { HOME_ROUTE, LOGIN_ROUTE } from "../../consts/routeConsts";
import { useHistory } from "react-router-dom";
import { NAVBAR_HEADLINES } from "./NavbarData";


const Navbar = () => {
  let history = useHistory();

  return (
    <div className="navbarElements">
      {NAVBAR_HEADLINES.map((element) => (
        <div id={element.id} className="navbarElement" onClick={() => { history.push(element.route); }}>{element.label}</div>
      ))}
    </div>
  );
};

export default Navbar;
