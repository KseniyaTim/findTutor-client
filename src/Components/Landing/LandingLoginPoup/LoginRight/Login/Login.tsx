import { FC, useState, } from 'react';

// style
import * as S from './Login.style'

// services
import loginService from '../../../../../services/login/login'

// icons
import google from '../../../../../assets/images/login/google.png'

// comps
import LoginButton from '../LoginButton/LoginButton';
import LoginField from '../LoginField/LoginField';

// consts
import { LOGIN_POPUP_FIELDS } from './Login.data';
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';

const Login: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {

    const [field, setField] = useState(LOGIN_POPUP_FIELDS)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState(false)
    const [isLoginFailed, setIsLoginFailed] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsLoginFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleLogin = () => {
        if (field.every(element => { return element.isValid })) {
            loginService.login(field[0].value, field[1].value).then(data => {

            }).catch(err => { setIsLoginFailed(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    return (
        <>
            <S.RightMainTitle>התחבר לחשבונך</S.RightMainTitle>
            <S.RightSecondaryTitle>אין לך חשבון? <S.RightSecondaryTitleJoinText>הצטרף כאן</S.RightSecondaryTitleJoinText></S.RightSecondaryTitle>
            {
                LOGIN_POPUP_FIELDS.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            <S.RightLoginForgetPassword onClick={() => { setTempLoginComp(LOGIN_TOGGLER_COMPS.forgotPassword) }}>שכחתי סיסמה</S.RightLoginForgetPassword>
            {isLoginFailed && <S.RightLoginFailed>שם משתמש או סיסמא שגויים</S.RightLoginFailed>}
            <LoginButton text='התחבר' execFunction={handleLogin}></LoginButton>
            <S.RightSeperator>או</S.RightSeperator>
            <LoginButton text='התחבר עם גוגל' icon={google}></LoginButton>
        </>
    );
};

export default Login;