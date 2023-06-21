import { IField } from "../../ILandingLoginPopup"

export const LOGIN_POPUP_FIELDS: IField[] = [
    {
        placeholder: 'כתובת מייל',
        validationFuncs: [{ functionName: 'isEmailValid', errorMsg: 'כתובת אימייל אינה תקינה' }],
        dbLabel: 'email',
        isRequired: true,
        value: '',
        isValid: false,
        type: ''
    },
    {
        placeholder: 'סיסמה',
        validationFuncs: [],
        dbLabel: 'password',
        isRequired: true,
        value: '',
        isValid: false,
        type: 'password'
    }
]