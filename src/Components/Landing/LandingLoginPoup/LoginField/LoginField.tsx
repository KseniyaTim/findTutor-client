import { FC, useState } from 'react';

import * as S from './LoginField.style'
import { IField } from '../ILandingLoginPopup';


const LoginField: FC<IField> = ({ dbLabel, isRequired, placeholder, validationFuncs, value }) => {

    const handleChange = (value: string) => {

    }

    const [isFieldValid, setisFieldValid] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    
    return (
        <S.Text
            fullWidth
            error={!isFieldValid}
            helperText={!isFieldValid ? errorMsg : ''}
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default LoginField;