import { FC, useState } from "react";

//css
import * as S from './LandingCenter.style'
import './LandingCenter.css'

//routing
import { useHistory } from "react-router-dom";
import { REGISTER_ROUTE, TEACHER_SEARCH_ROUTE } from "../../../consts/routes";

// mui
import Autocomplete from "@mui/material/Autocomplete";

// consts 
import { NAVBAR_HEADLINES } from "./LandingCenter.data";

// assets
import landingPageImg from '../../../assets/images/landing/landingCenter/landingCenter.png'
import LandingLoginPopup from "../LandingLoginPoup/LandingLoginPoup";
import { navbarFunctionsManager } from "./ILandingCenter";

const LandingCenter: FC = () => {
  let history = useHistory();

  const [fieldOfLearning, setFieldOfLearning] = useState<string | null>(null);
  const [isFolDropdownOpen, setIsFolDropdownOpen] = useState<boolean>(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false)

  const filterAutoCompleteOption = (options: string[], { inputValue }: { inputValue: string }) => {
    return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const textFieldsFuncValidators: navbarFunctionsManager = {
    openLoginPopup: () => {
      setIsLoginPopupOpen(true)
    },
    toRegister: () => {
      history.push(REGISTER_ROUTE)
    }
  };

  return (
    <>
      <S.LandingContainer>
        <S.NavbarContainer>
          {NAVBAR_HEADLINES.map((element, index) => (
            <S.NavbarElement key={index} onClick={() => { textFieldsFuncValidators[element.funcName]() }}>{element.label}</S.NavbarElement>
          ))}
        </S.NavbarContainer>

        <S.CenterContainer>
          <div>
            <S.MainTitle>
              העזרה שחיפשתם,<br />

              במחיר שאתם צריכים
            </S.MainTitle>
            <Autocomplete
              value={fieldOfLearning}
              onChange={(event: any, value: string | null) => { setFieldOfLearning(value) }}
              onInputChange={(event: any, value: string) => { setIsFolDropdownOpen(value.length >= 2) }}
              options={['Math', 'Science', 'History']}
              open={isFolDropdownOpen}
              onClose={() => setIsFolDropdownOpen(false)}
              filterOptions={filterAutoCompleteOption}
              noOptionsText="לא נמצאו אפשרויות"
              popupIcon={false}
              renderInput={(params) => (
                <S.AutocompleteInput
                  dir="rtl"
                  {...params}
                  placeholder="מה בא לך ללמוד היום?"
                  fullWidth
                  sx={{
                    borderRadius: '25px',
                    fontSize: '1.2rem',
                    backgroundColor: 'white',
                    marginTop: '1rem',
                    justifyContent: 'right',
                    direction: 'rtl',
                    padding: '0'
                  }}
                  onClick={() => setIsFolDropdownOpen(true)}
                />
              )}
            />
            <S.CenterPopularContainer>
              <div >פופולרי</div> {/* will change */}
              <S.CenterPopularOption>מתמטיקה</S.CenterPopularOption>
              <S.CenterPopularOption>אנגלית</S.CenterPopularOption>
              <S.CenterPopularOption>פסיכומטרי</S.CenterPopularOption>
              <S.CenterPopularOption>תכנות</S.CenterPopularOption>
              <S.CenterPopularOption>צרפתית</S.CenterPopularOption>
            </S.CenterPopularContainer>
          </div>
          <S.CenterLeftImg src={landingPageImg} alt='noImage' />
        </S.CenterContainer>
      </S.LandingContainer>

      <S.ButtonsContainer>
        <S.LandingBtn onClick={() => { history.push(TEACHER_SEARCH_ROUTE) }}>מצא לי מורה</S.LandingBtn>
        <S.LandingBtn onClick={() => { history.push(REGISTER_ROUTE) }}>צור פרופיל מורה</S.LandingBtn>
      </S.ButtonsContainer>
      <LandingLoginPopup isLoginPopupOpen={isLoginPopupOpen} setIsLoginPopupOpen={setIsLoginPopupOpen} />
    </>
  );
};

export default LandingCenter;
