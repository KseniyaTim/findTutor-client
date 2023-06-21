import { FC, useEffect, useState } from 'react';

// style
import * as S from './LoginField.style'

// interface
import { IFieldManager } from '../../ILandingLoginPopup';

// utils
import { checkValidaitons, isEmptyAndRequired } from '../../../../../utils/validations/funcs';

// hooks
import { useIsAfterFirstRender } from '../../../../../hooks/useIsAferFirstRender';

const LoginField: FC<IFieldManager> = ({ field, updateFieldInfo, index, checkEmptyRequiredFields, type }) => {

    const [isFieldValid, setisFieldValid] = useState(true)
    const [fieldValue, setFieldValue] = useState<string>(field.value)
    const [errorMsg, setErrorMsg] = useState('')

    const isAfterFirstRender = useIsAfterFirstRender();

    const handleChange = (value: string) => {
        setFieldValue(value)
        if (value.length === 0) {
            setisFieldValid(true)
            updateFieldInfo(!field.isRequired, value, index)
            return
        }
        const { isTextValid, validFuncIndex } = checkValidaitons(value, field.validationFuncs)
        setisFieldValid(isTextValid)
        updateFieldInfo(isTextValid, value, index)
        !isTextValid && setErrorMsg(field.validationFuncs[validFuncIndex - 1].errorMsg)
    }


    useEffect(() => {
        if (isAfterFirstRender) {
            if (isEmptyAndRequired(fieldValue, field.isRequired)) {
                setisFieldValid(false)
                setErrorMsg('שדה חובה')
            }
        }
    }, [checkEmptyRequiredFields])

    return (
        <S.Text
            fullWidth
            type={type}
            error={!isFieldValid}
            helperText={!isFieldValid ? errorMsg : ''}
            value={fieldValue}
            placeholder={field.placeholder}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default LoginField;