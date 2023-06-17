import { FC, useState } from 'react';

// style
import * as S from './LoginField.style'

// interface
import { IFieldManager } from '../../ILandingLoginPopup';

// utils
import { checkValidaitons } from '../../../../../utils/validations/funcs';

const LoginField: FC<IFieldManager> = ({ field, updateFieldValidity, index }) => {

    const [isFieldValid, setisFieldValid] = useState(true)
    const [fieldValue, setFieldValue] = useState<string>(field.value)
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (value: string) => {
        setFieldValue(value)
        if (value.length === 0) {
            setisFieldValid(true)
            updateFieldValidity(!field.isRequired, index)
            return
        }
        const { isTextValid, validFuncIndex } = checkValidaitons(value, field.validationFuncs)
        setisFieldValid(isTextValid)
        updateFieldValidity(isTextValid, index)
        setErrorMsg(field.validationFuncs[validFuncIndex - 1].errorMsg)
    }

    return (
        <S.Text
            fullWidth
            error={!isFieldValid}
            helperText={!isFieldValid ? errorMsg : ''}
            value={fieldValue}
            placeholder={field.placeholder}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default LoginField;