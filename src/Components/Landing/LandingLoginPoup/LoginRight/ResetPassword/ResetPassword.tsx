import { FC } from 'react';

// consts
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { RESET_PASSWORD_FIELDS, RESET_PASSWORD_INFO } from './ResetPassword.data';

// services
import loginService from '../../../../../services/login/login'

// comps
import GenericLoginForm from '../GenericLoginForm/GenericLoginForm';

const ResetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {

    const handleResetPassword = async (firstPassword: string, secondPassword: string) => {
        if (firstPassword !== secondPassword) return Promise.reject({ message: RESET_PASSWORD_INFO.ERROR_MSG })
        
        return await loginService.resetPassword(firstPassword).then((data) => {
            return data
        })
    }

    return (
        <>
            <GenericLoginForm buttonFunc={handleResetPassword}
                buttonText={RESET_PASSWORD_INFO.BUTTON_TEXT}
                errorMsg={RESET_PASSWORD_INFO.ERROR_MSG}
                fields={RESET_PASSWORD_FIELDS}
                setTempLoginComp={setTempLoginComp}
                title={RESET_PASSWORD_INFO.MAIN_TITLE}
                nextComp={LOGIN_TOGGLER_COMPS.login} />
        </>
    );
};

export default ResetPassword;