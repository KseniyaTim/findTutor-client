import { FC } from "react";

// interfaces
import { IGenericForm } from "./IGenericForm";

// css & mui
import Button from "@mui/material/Button";
import "./GenericForm.css";

//componenets
import GenericField from "../GenericField/GenericField";

const GenericForm: FC<IGenericForm> = ({
  formTitle,
  formFields,
  buttonTitle,
}) => {
  return (
    <div className="formWrapper">
      <div>
        <div className="formTitle">{formTitle}</div>
        {formFields.map((element, index) => (
          <div className="formField" key={index}>
            <GenericField label={element.label} />
          </div>
        ))}
        <Button variant="contained" style={{ backgroundColor: "crimson" }}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default GenericForm;
