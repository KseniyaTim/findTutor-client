import { FC, useState, useEffect } from 'react';

// mui
import { Grid } from '@mui/material';

// style
import * as S from './LoginRight.style'

// consts
import { LOGIN_POPUP_FIELDS, LOGIN_POPUP_FIELDS_MANAGER } from './LoginRight.data';

// comps
import LoginButton from './LoginButton/LoginButton';
import LoginField from './LoginField/LoginField';

// icons
import google from '../../../../assets/images/login/google.png'

// interfaces
import { ILoginRight } from './ILoginRight';

import loginService from '../../../../services/login/login'

const LoginRight: FC<ILoginRight> = ({ setIsLoginPopupOpen }) => {

    const [field, setField] = useState(LOGIN_POPUP_FIELDS_MANAGER)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState(false)
    const [isLoginFailed, setIsLoginFailed] = useState(false)


    useEffect(() => {
        setField(prev => {
            const newIsFieldsValid = [...prev]
            newIsFieldsValid.forEach((element, index) => {
                element.isValid = !LOGIN_POPUP_FIELDS[index].isRequired
            })
            return newIsFieldsValid
        });
    }, [])

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsLoginFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleLogin = () => {
        if (field.every(Boolean)) {
            loginService.login(field[0].value, field[1].value).then(data => {

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
                            type={element.type}
                            key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                    ))
                }
                <S.RightLoginForgetPassword>שכחתי סיסמה</S.RightLoginForgetPassword>
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