import { IFieldValidators } from "../../../utils/validations/validators";

export interface ILandingLoginPopup {
    isLoginPopupOpen: boolean;
    setIsLoginPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export interface IField {
    placeholder: string
    validationFuncs: IFieldValidators[]
    dbLabel: string,
    value: string,
    isRequired: boolean,
    isValid: boolean,
    type: string
}


export interface IFieldManager {
    field: IField
    updateFieldInfo: (isFieldsValid: boolean, value: string, index: number) => void
    index: number
    checkEmptyRequiredFields: boolean,
    type: string
}