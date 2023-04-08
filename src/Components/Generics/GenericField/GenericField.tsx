import { TextField } from '@mui/material';
import { FC, useState } from 'react';
import { IGenericField } from './IGenericField';
import { checkValidaitons } from '../../../utils/validationFuncs';

import './GenericField.css'

const GenericField: FC<IGenericField> = ({ label, validationFuncs }) => {

    const [errorMsg, setErrorMsg] = useState("");
    const [isFieldValid, setIsFieldValid] = useState(false);

    const handleChange = (text: string) => {
        if (!text) {
            setErrorMsg("")
            return
        }
        let isValid = true
        if (validationFuncs) {
            const { isTextValid, validFuncIndex } = checkValidaitons(text, validationFuncs)
            isValid = isTextValid
            console.log(isTextValid, validFuncIndex)
            if (!isTextValid) {
                setErrorMsg(validationFuncs![validFuncIndex - 1].errorMessage)
            }
        }

        if (isValid) {
            setErrorMsg("")
        }
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                className="field"
                onChange={(text) => { handleChange(text.target.value) }}
                sx={{ width: "100%" }}
            />
            {errorMsg && <div className='errorMsg'> {errorMsg}</div>}
        </div>
    );
};

export default GenericField;