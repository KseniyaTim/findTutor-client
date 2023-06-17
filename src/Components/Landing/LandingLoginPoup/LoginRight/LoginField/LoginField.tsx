import { FC, useState } from 'react';

// style
import * as S from './LoginField.style'

// interface
import { IFieldManager } from '../../ILandingLoginPopup';

// utils
import { checkValidaitons } from '../../../../../utils/validations/funcs';

const LoginField: FC<IFieldManager> = ({ field, setIsFieldsValid }) => {

    const [isFieldValid, setisFieldValid] = useState(true)
    const [fieldValue, setFieldValue] = useState(field.value)
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (value: string) => {

        if (value.length === 0) {
            setisFieldValid(true)
        }
        const { isTextValid, validFuncIndex } = checkValidaitons(value, field.validationFuncs)
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