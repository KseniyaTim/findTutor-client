import { Autocomplete, TextField } from "@mui/material";
import React, { FC } from "react";
import { IGenericSearchField } from "./IGenericSearchField";

const GenericSearchField: FC<IGenericSearchField> = ({ options, label }) => {
  return (
    <div dir="rtl">
      <Autocomplete
      dir="rtl"
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 400,  textAlign: 'left'}}
        renderInput={(params) => <TextField {...params} label={label} sx={{ height: '3rem'}}/>}
      />
    </div>
  );
};

export default GenericSearchField;
