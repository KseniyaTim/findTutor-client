import { FC } from 'react';

// services
import loginService from '../../../../../services/login/login'

// consts
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { FORGET_PASSWORD_FIELDS, FORGOT_PASSWORD_INFO } from './ForgetPassword.data';

// comps
import GenericLoginForm from '../GenericLoginForm/GenericLoginForm';

const ForgetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {

    const handleForgetPassword = async (email: string) => {
        return await loginService.forgotPassword(email).then((data) => {
            return data
        })
    }

    return (
        <GenericLoginForm backButtonTitle={FORGOT_PASSWORD_INFO.BACK_BUTTON_TITLE}
            backCompType={LOGIN_TOGGLER_COMPS.login}
            title={FORGOT_PASSWORD_INFO.TITLE}
            errorMsg={FORGOT_PASSWORD_INFO.ERROR_MSG}
            fields={FORGET_PASSWORD_FIELDS}
            nextComp={LOGIN_TOGGLER_COMPS.restorationCode}
            setTempLoginComp={setTempLoginComp}
            buttonText={FORGOT_PASSWORD_INFO.BUTTON_TEXT}
            buttonFunc={handleForgetPassword}
        />
    );
};

export default ForgetPassword;