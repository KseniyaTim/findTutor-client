// mui
import AppBar from "@mui/material/AppBar";

//css
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ height: "4rem", bgcolor: "crimson" }}>
        <div className="navbarElements">
          <div>Find A Tutor</div>
          
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
