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