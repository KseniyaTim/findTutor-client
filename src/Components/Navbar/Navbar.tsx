import { FC, useState } from "react";

//css
import "./Navbar.css";
import landingPageImg from './ttt.png'

//routing
import { useHistory } from "react-router-dom";
import { REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../../consts/routeConsts";

// mui
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// consts 
import { NAVBAR_HEADLINES } from "./NavbarData";

const Navbar: FC = () => {
  let history = useHistory();

  const [fieldOfLearning, setFieldOfLearning] = useState<string | null>(null);
  const [isFolDropdownOpen, setIsFolDropdownOpen] = useState<boolean>(false);


  const filterAutoCompleteOption = (options: string[], { inputValue }: { inputValue: string }) => {
    return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
  };

  return (
    <>
      <div className="landingContainer">
        <div className="navbarElements">

          {NAVBAR_HEADLINES.map((element, index) => (
            <div key={index} id={element.id} className="navbarElement" onClick={() => { history.push(element.route); }}>{element.label}</div>
          ))}
        </div>

        <div className="centerContainer">
          <div>
            <div className="mainTitle">
              <div>העזרה שחיפשתם,</div>
              <div>במחיר שאתם צריכים</div>
            </div>
            <Autocomplete
              value={fieldOfLearning}
              onChange={(event: any, value: string | null) => { setFieldOfLearning(value) }}
              onInputChange={(event: any, value: string) => { setIsFolDropdownOpen(value.length >= 2) }}
              options={['Math', 'Science', 'History']}
              open={isFolDropdownOpen}
              onClose={() => setIsFolDropdownOpen(false)}
              filterOptions={filterAutoCompleteOption}
              noOptionsText="לא נמצאו אפשרויות"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="מה בא לך ללמוד היום?"
                  fullWidth
                  sx={{
                    borderRadius: '25px',
                    fontSize: '1.2rem',
                    backgroundColor: 'white',
                    marginTop: '1rem'
                  }}
                  onClick={() => setIsFolDropdownOpen(true)}
                />
              )}
            />
            <div className="popular">
              <div >פופולרי</div>
              <div className="popularOption">מתמטיקה</div>
              <div className="popularOption">אנגלית</div>
              <div className="popularOption">פסיכומטרי</div>
              <div className="popularOption">תכנות</div>
              <div className="popularOption">צרפתית</div>
            </div>
          </div>
          <img src={landingPageImg} className="mainImg" />
        </div>
      </div>

      <div className="landingPageButtonsContainer">
        <div className="landingPageBtn" onClick={() => { history.push(TEACHER_SEARCH_ROUTE) }}>מצא לי מורה</div>
        <div className="landingPageBtn" onClick={() => { history.push(REGISTER_ROUTE) }}>צור פרופיל מורה</div>
      </div>
    </>
  );
};

export default Navbar;
