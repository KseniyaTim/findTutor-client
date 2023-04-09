import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { IGenericSearchField } from "../../Components/Generics/GenericSearchField/IGenericSearchField";

const GenericSearchField: FC<IGenericSearchField> = ({ options, label }) => {
  return (
    <div dir="rtl">
      <Autocomplete
        dir="rtl"
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 400, textAlign: "left" }}
        renderInput={(params) => (
          <TextField {...params} label={label} sx={{ height: "3rem" }} />
        )}
      />
    </div>
  );
};

export default GenericSearchField;
