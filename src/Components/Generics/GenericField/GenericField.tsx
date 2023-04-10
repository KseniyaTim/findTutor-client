import { TextField } from '@mui/material';
import { FC, useState,useEffect } from 'react';
import { IGenericFieldComp } from './IGenericField';
import { checkValidaitons } from '../../../utils/validationFuncs';

import './GenericField.css'

const GenericField: FC<IGenericFieldComp> = ({ label, validationFuncs, required, fieldIndex, updateFieldState,value,checkRequired }) => {

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (text: string) => {
        if (!text) {
            setErrorMsg("")
            updateFieldState(fieldIndex, !required,text)
            return
        }
        if (validationFuncs) {
            const { isTextValid, validFuncIndex } = checkValidaitons(text, validationFuncs)
            if (!isTextValid) {
                setErrorMsg(validationFuncs![validFuncIndex - 1].errorMessage)
                updateFieldState(fieldIndex, false,text)
                return
            }
        }
        setErrorMsg("")
        updateFieldState(fieldIndex, true,text)
    }

    useEffect(() => {
    if (checkRequired !== 0) {
        if (!value && required) {
            setErrorMsg("שדה חובה")
            return
        }
    }
    
    }, [checkRequired])
    

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