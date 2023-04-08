import { TextField } from '@mui/material';
import { FC } from 'react';
import { IGenericField } from './IGenericField';

const GenericField:FC<IGenericField> = ({label}) => {
    return (
        <div>
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              className="field"
              dir=""
            />
        </div>
    );
};

export default GenericField;