import { FC, useState, useEffect } from 'react';

// mui
import { Grid } from '@mui/material';

// style
import * as S from './LoginRight.style'

// consts
import { LOGIN_POPUP_FIELDS } from './LoginRight.data';

// comps
import LoginButton from './LoginButton/LoginButton';
import LoginField from './LoginField/LoginField';

// icons
import google from '../../../../assets/images/login/google.png'

// interfaces
import { ILoginRight } from './ILoginRight';

import loginService from '../../../../services/login/login'

const LoginRight: FC<ILoginRight> = ({ setIsLoginPopupOpen }) => {

    const [isFieldsValid, setIsFieldsValid] = useState<boolean[]>([])
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState(false)
    const [isLoginFailed, setIsLoginFailed] = useState(false)


    useEffect(() => {
        setIsFieldsValid(() => {
            return LOGIN_POPUP_FIELDS.map(element => { return !element.isRequired })
        });
    }, [])

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };

    const updateFieldValidity = (isValid: boolean, index: number) => {
        setIsFieldsValid(prev => {
            prev[index] = isValid
            return [...prev]
        })
    }

    const handleLogin = () => {
        if (isFieldsValid.every(Boolean)) {
            loginService.login().then(data => {

            }).catch(err => { setIsLoginFailed(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    return (
        <Grid item xs={6}>
            <S.RightCloseIcon className="material-symbols-outlined" onClick={handleClose}>close</S.RightCloseIcon>
            <S.RightContainer>
                <S.RightMainTitle>התחבר לחשבונך</S.RightMainTitle>
                <S.RightSecondaryTitle>אין לך חשבון? <S.RightSecondaryTitleJoinText>הצטרף כאן</S.RightSecondaryTitleJoinText></S.RightSecondaryTitle>
                {
                    LOGIN_POPUP_FIELDS.map((element, index) => (
                        <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                            key={index} field={element} index={index} updateFieldValidity={updateFieldValidity}></LoginField>
                    ))
                }
                {isLoginFailed && <S.RightLoginFailed>שם משתמש או סיסמא שגויים</S.RightLoginFailed>}
                <div onClick={() => { handleLogin() }}>
                    <LoginButton text='התחבר'></LoginButton>
                </div>
                <S.RightSeperator>או</S.RightSeperator>
                <LoginButton text='התחבר עם גוגל' icon={google}></LoginButton>
            </S.RightContainer>
        </Grid>
    );
};

export default LoginRight;