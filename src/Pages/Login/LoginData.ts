import { IGenericField } from "../../Components/Generics/GenericField/IGenericField";

export const LOGIN_HEADERS: IGenericField[] = [
    {
        label: 'דואר אלקטרוני',
        validationFuncs: [
            { funcName: 'checkEmail', errorMessage: 'כתובת דואר אלקטרוני לא תקינה' },
        ],
        required: true,
        value: '',
        isValid: false
    },
    {
        label: 'סיסמה',
        validationFuncs: [
            {
                funcName: 'minLength',
                param1: 8,
                errorMessage: 'סיסמה חייבת להכיל לפחות 8 תווים'
            }
        ],
        required: true,
        value: '',
        isValid: false
    }
]