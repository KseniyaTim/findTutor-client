import { IField } from "../../ILandingLoginPopup"

export const RESET_PASSWORD_FIELDS: IField[] = [
    {
        placeholder: 'סיסמה חדשה',
        validationFuncs: [],
        dbLabel: 'password',
        isRequired: true,
        value: '',
        isValid: false,
        type: ''
    },
    {
        placeholder: 'אמת סיסמה',
        validationFuncs: [],
        dbLabel: 'password',
        isRequired: true,
        value: '',
        isValid: false,
        type: 'password'
    }
]