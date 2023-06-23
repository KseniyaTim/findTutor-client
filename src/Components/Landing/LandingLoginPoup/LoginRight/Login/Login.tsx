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
import { LOGIN } from '../../../../../consts/login';

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
            <S.RightMainTitle>{LOGIN.MAIN_TITLE}</S.RightMainTitle>
            <S.RightSecondaryTitle>
                {LOGIN.SECONDARY_TITLE}
                <S.RightSecondaryTitleJoinText>{LOGIN.SECONDARY_TITLE_LINK}</S.RightSecondaryTitleJoinText>
            </S.RightSecondaryTitle>
            {
                LOGIN_POPUP_FIELDS.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            <S.RightLoginForgetPassword onClick={() => { setTempLoginComp(LOGIN_TOGGLER_COMPS.forgotPassword) }}>
                {LOGIN.FORGOT_PASSWORD}
            </S.RightLoginForgetPassword>
            {isLoginFailed && <S.RightLoginFailed>{LOGIN.ERROR_MSG}</S.RightLoginFailed>}
            <LoginButton text={LOGIN.BUTTON_TEXT} execFunction={handleLogin}></LoginButton>
            <S.RightSeperator>או</S.RightSeperator>
            <LoginButton text={LOGIN.GOOGLE_BUTTON_TEXT} icon={google}></LoginButton>
        </>
    );
};

export default Login;