import { FC, useState, useEffect } from "react";

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
  setFormFields,
  buttonTitle,
  handleButtonFunc,
}) => {

  const [checkRequired, setCheckRequired] = useState(0)

  const updateFieldStatus = (fieldIndex: number, isFieldValid: boolean, value: string) => {
    setFormFields(prev => {
      const newFieldsStatus = [...prev]
      newFieldsStatus[fieldIndex].isValid = isFieldValid
      newFieldsStatus[fieldIndex].value = value
      return newFieldsStatus
    })
  }

  const handleClick = () => {
    const isFormValid = formFields.every(field => field.isValid)
    if (isFormValid) {
      handleButtonFunc()
      return
    }
    setCheckRequired(prev => prev + 1)
  }


  return (
    <div className="formWrapper">
      <div>
        <div className="formTitle">{formTitle}</div>
        {formFields.map((element, index) => (
          <div className="formField" key={index}>
            <GenericField fieldIndex={index}
              label={element.label}
              required={element.required}
              validationFuncs={element.validationFuncs}
              value={element.value}
              checkRequired={checkRequired}
              updateFieldState={updateFieldStatus} />
          </div>
        ))}
        <Button onClick={() => { handleClick() }} variant="contained" style={{ backgroundColor: "crimson" }}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default GenericForm;
