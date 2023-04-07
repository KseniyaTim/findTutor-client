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
  formFeilds,
  buttonTitle,
}) => {
  return (
    <div className="formWrapper">
      <div>
        <div className="formTitle">{formTitle}</div>
        {formFeilds.map((element, index) => (
          <div className="formField" key={index}>
            <GenericField label={element} />
          </div>
        ))}
        <Button variant="contained" style={{ backgroundColor: "crimson" }}>
          {buttonTitle}
        </Button>
        <div>שכחתי סיסמה</div>
      </div>
    </div>
  );
};

export default GenericForm;
