import { FC, useState } from 'react';

// style
import * as S from './RestorationCode.style'

// consts
import { RESTORATION_CODE_FIELD } from './RestorationCode.data';
import { ILoginRightTogglers, LOGIN_TOGGLER_COMPS } from '../LoginRight.data';

// comps
import LoginField from '../LoginField/LoginField';
import LoginButton from '../LoginButton/LoginButton';

// services
import loginService from '../../../../../services/login/login'

const RestorationCode: FC<ILoginRightTogglers> = ({ setTempLoginComp }) => {
    const [field, setField] = useState(RESTORATION_CODE_FIELD)
    const [checkEmptyRequiredFields, setCheckEmptyRequiredFields] = useState<boolean>(false)
    const [isRestorationCodeWrong, setIsRestorationCodeWrong] = useState(false)

    const updateFieldInfo = (isValid: boolean, value: string, index: number) => {
        setIsRestorationCodeWrong(false)
        setField(prev => {
            prev[index].isValid = isValid
            prev[index].value = value
            return [...prev]
        })
    }

    const handleForgetPassword = () => {
        if (field.every(element => { return element.isValid })) {
            loginService.restorationCode(field[0].value).then(data => {
                setTempLoginComp(LOGIN_TOGGLER_COMPS.resetPassword)

            }).catch(err => { setIsRestorationCodeWrong(true) })
        }
        else {
            setCheckEmptyRequiredFields(prevCheckEmpty => { return !prevCheckEmpty })
        }
    }

    return (
        <>
            <S.InsertRestorationCodeTitle>הזן קוד איפוס</S.InsertRestorationCodeTitle>
            {
                RESTORATION_CODE_FIELD.map((element, index) => (
                    <LoginField checkEmptyRequiredFields={checkEmptyRequiredFields}
                        type={element.type}
                        key={index} field={element} index={index} updateFieldInfo={updateFieldInfo}></LoginField>
                ))
            }
            {isRestorationCodeWrong && <S.RightRestorationCodeWrong>קוד האיפוס שגוי</S.RightRestorationCodeWrong>}
            <LoginButton text='שלח קוד' execFunction={handleForgetPassword} />
        </>
    );
};

export default RestorationCode;