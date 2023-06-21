import { FC, useState, useEffect } from 'react';

import * as S from './ForgetPassword.style'
import LoginField from '../LoginField/LoginField';
import LoginButton from '../LoginButton/LoginButton';
import { FORGET_PASSWORD_FIELD, FORGET_PASSWORD_FIELD_MANAGER } from './ForgetPassword.data';

import loginService from '../../../../../services/login/login'
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS, loginTogglerCompsManager } from '../LoginRight.data';

const ForgetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {
    const [field, setField] = useState(FORGET_PASSWORD_FIELD_MANAGER)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState(false)
    const [isForgotPasswordFailed, setIsForgotPasswordFailed] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsForgotPasswordFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleForgetPassword = () => {
        if (field.every(Boolean)) {
            loginService.forgotPassword(field[0].value).then(data => {
                setTempLoginComp(LOGIN_TOGGLER_COMPS.restorationCode)

            }).catch(err => { setIsForgotPasswordFailed(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    return (
        <>
            <S.BackToLoginPopup onClick={() => { setTempLoginComp(LOGIN_TOGGLER_COMPS.login) }}>חזור</S.BackToLoginPopup>
            <S.InsertEmailTitle>הזן כתובת מייל לשחזור</S.InsertEmailTitle>
            {
                FORGET_PASSWORD_FIELD.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            {isForgotPasswordFailed && <S.RightForgotPasswordFailed>אימייל אינו קיים במערכת</S.RightForgotPasswordFailed>}
            <LoginButton text='שלחו לי קוד לשחזור' execFunction={handleForgetPassword} />
        </>
    );
};

export default ForgetPassword;