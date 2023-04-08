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
        sx={{  textAlign: 'left'}}
        renderInput={(params) => <TextField  {...params} label={label} sx={{ height: '3rem',borderRadius: '25px'}}/>}
      />
    </div>
  );
};

export default GenericSearchField;
