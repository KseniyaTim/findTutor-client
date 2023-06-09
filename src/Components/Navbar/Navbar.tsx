import { FC, useState } from "react";

//css
import landingPageImg from './ttt.png'
import * as S from './Navbar.style'

//routing
import { useHistory } from "react-router-dom";
import { REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../../consts/routeConsts";

// mui
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// consts 
import { NAVBAR_HEADLINES } from "./NavbarData";
import CardSlider from "../Slider/Slider";
import LandingQualities from "../LandingQualities/LandingQualities";

const Navbar: FC = () => {
  let history = useHistory();

  const [fieldOfLearning, setFieldOfLearning] = useState<string | null>(null);
  const [isFolDropdownOpen, setIsFolDropdownOpen] = useState<boolean>(false);


  const filterAutoCompleteOption = (options: string[], { inputValue }: { inputValue: string }) => {
    return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
  };

  return (
    <>
      <S.LandingContainer>
        <S.NavbarContainer>
          {NAVBAR_HEADLINES.map((element, index) => (
            <S.NavbarElement key={index} id={element.id} onClick={() => { history.push(element.route); }}>{element.label}</S.NavbarElement>
          ))}
        </S.NavbarContainer>

        <S.CenterContainer>
          <div>
            <S.MainTitle>
              העזרה שחיפשתם,<br />
              במחיר שאתם צריכים
            </S.MainTitle>
            <Autocomplete
              dir="rtl"
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
                    marginTop: '1rem',
                    justifyContent: 'right',
                    direction: 'rtl',
                  }}
                  onClick={() => setIsFolDropdownOpen(true)}
                />
              )}
            />
            <S.CenterPopularContainer>
              <div >פופולרי</div>
              <S.CenterPopularOption>מתמטיקה</S.CenterPopularOption>
              <S.CenterPopularOption>אנגלית</S.CenterPopularOption>
              <S.CenterPopularOption>פסיכומטרי</S.CenterPopularOption>
              <S.CenterPopularOption>תכנות</S.CenterPopularOption>
              <S.CenterPopularOption>צרפתית</S.CenterPopularOption>
            </S.CenterPopularContainer>
          </div>
          <S.CenterLeftImg src={landingPageImg} alt='sa' />
        </S.CenterContainer>
      </S.LandingContainer>

      <S.ButtonsContainer>
        <S.LandingBtn onClick={() => { history.push(TEACHER_SEARCH_ROUTE) }}>מצא לי מורה</S.LandingBtn>
        <S.LandingBtn onClick={() => { history.push(REGISTER_ROUTE) }}>צור פרופיל מורה</S.LandingBtn>
      </S.ButtonsContainer>
      <CardSlider />
      <LandingQualities/>
    </>
  );
};

export default Navbar;
