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
import { FORGET_PASSWORD_FIELDS } from './ForgetPassword.data';
import GenericLoginForm from '../GenericLoginForm/GenericLoginForm';
import { FORGOT_PASSWORD } from '../../../../../consts/login';

const ForgetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {
    const [field, setField] = useState(FORGET_PASSWORD_FIELDS)
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
        loginService.forgotPassword(field[0].value).then(data => {
            setTempLoginComp(LOGIN_TOGGLER_COMPS.restorationCode)
        })
    }

    return (
        <GenericLoginForm backButtonTitle={FORGOT_PASSWORD.BACK_BUTTON_TITLE}
            backCompType={LOGIN_TOGGLER_COMPS.login}
            title={FORGOT_PASSWORD.TITLE}
            errorMsg={FORGOT_PASSWORD.ERROR_MSG}
            fields={FORGET_PASSWORD_FIELDS}
            nextComp={LOGIN_TOGGLER_COMPS.restorationCode}
            setTempLoginComp={setTempLoginComp}
            buttonText={FORGOT_PASSWORD.BUTTON_TEXT}
            buttonFunc={handleForgetPassword}
        />
    );
};

export default ForgetPassword;