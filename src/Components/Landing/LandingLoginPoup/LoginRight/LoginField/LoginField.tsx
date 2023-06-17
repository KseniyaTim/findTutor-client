import { FC, useState } from 'react';

import * as S from './LoginField.style'
import { IField } from '../../ILandingLoginPopup';
import { checkValidaitons } from '../../../../../utils/validations/funcs';


const LoginField: FC<IField> = ({ dbLabel, isRequired, placeholder, validationFuncs, value }) => {

    const [isFieldValid, setisFieldValid] = useState(true)
    const [fieldValue, setFieldValue] = useState(value)
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (value: string) => {

        if (value.length === 0) {
            setisFieldValid(true)
        }
        const { isTextValid, validFuncIndex } = checkValidaitons(value, validationFuncs)
    }



    return (
        <S.Text
            fullWidth
            error={!isFieldValid}
            helperText={!isFieldValid ? errorMsg : ''}
            value={fieldValue}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default LoginField;