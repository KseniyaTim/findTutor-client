import { FC, useState } from 'react';

// style
import * as S from './ForgetPassword.style'

// comps
import LoginField from '../LoginField/LoginField';
import LoginButton from '../LoginButton/LoginButton';

// services
import loginService from '../../../../../services/login/login'

// consts
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { FORGET_PASSWORD_FIELD } from './ForgetPassword.data';

const ForgetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {
    const [field, setField] = useState(FORGET_PASSWORD_FIELD)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState<boolean>(false)
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
        if (field.every(element => { return element.isValid })) {
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
            <LoginButton text='שחזור סיסמא' execFunction={handleForgetPassword} />
        </>
    );
};

export default ForgetPassword;