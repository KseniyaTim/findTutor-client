import { IField } from "../ILandingLoginPopup";

export const LOGIN_POPUP_FIELDS: IField[] = [
    {
        placeholder: 'כתובת מייל',
        validationFuncs: [{ functionName: 'isEmailValid', errorMsg: 'כתובת אימייל אינה תקינה' }],
        dbLabel: 'email',
        isRequired: true,
        value: '',
        type: ''
    },
    {
        placeholder: 'סיסמה',
        validationFuncs: [],
        dbLabel: 'password',
        isRequired: true,
        value: '',
        type: 'password'
    }
]

export const LOGIN_POPUP_FIELDS_MANAGER = [
    {
        isValid: false,
        value: ''
    },
    {
        isValid: false,
        value: ''
    },
]

