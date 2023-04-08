import { IGenericField } from "../Components/Generics/GenericField/IGenericField";

export const LOGIN_HEADERS: IGenericField[] = [
    {
        label: 'דואר אלקטרוני',
        validationFuncs: [
            { funcName: 'checkEmail', errorMessage: 'כתובת דואר אלקטרוני לא תקינה' },
            { funcName: 'required', errorMessage: 'שדה זה חובה' }
        ]
    },
    {
        label: 'סיסמה',
        validationFuncs: [
            { funcName: 'required', errorMessage: 'שדה זה חובה' },
            {
                funcName: 'minLength',
                param1: 8, 
                errorMessage: 'סיסמה חייבת להכיל לפחות 8 תווים'
            }
        ]
    }
]