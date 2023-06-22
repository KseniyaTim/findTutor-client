import { FC, useState } from 'react';

// consts
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';
import { RESET_PASSWORD_FIELDS } from './ResetPassword.data';

// style
import * as S from './ResetPassword.style'

// services
import loginService from '../../../../../services/login/login'

// comps
import LoginField from '../LoginField/LoginField';
import LoginButton from '../LoginButton/LoginButton';

const ResetPassword: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {

    const [field, setField] = useState(RESET_PASSWORD_FIELDS)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState<boolean>(false)
    const [isResetPasswordFaied, setIsResetPasswordFailed] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsResetPasswordFailed(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleForgetPassword = () => {
        if (field.every(element => { return element.isValid })) {
            loginService.forgotPassword(field[0].value).then(data => {
                setTempLoginComp(LOGIN_TOGGLER_COMPS.login)

            }).catch(err => { setIsResetPasswordFailed(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }


    return (
        <>
            <S.ResetPasswordTitle>איפוס סיסמה</S.ResetPasswordTitle>
            {
                RESET_PASSWORD_FIELDS.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            {isResetPasswordFaied && <S.RightResetPasswordFailed>הסיסמאות אינן תואמות</S.RightResetPasswordFailed>}
            <LoginButton text='איפוס סיסמה' execFunction={handleForgetPassword} />
        </>
    );
};

export default ResetPassword;