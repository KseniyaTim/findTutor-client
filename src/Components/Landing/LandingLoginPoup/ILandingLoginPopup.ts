import { IFieldValidators } from "../../../utils/validations/validators";

export interface ILandingLoginPopup {
    isLoginPopupOpen: boolean;
    setIsLoginPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export interface IField {
    placeholder: string
    validationFuncs: IFieldValidators[]
    dbLabel: string,
    value: '',
    isRequired: boolean,
}


export interface IFieldManager {
    field: IField
    updateFieldValidity: (isFieldsValid: boolean,index: number) => void
    index: number
}