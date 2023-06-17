import { IField } from "../ILandingLoginPopup";

export const LOGIN_POPUP_FIELDS: IField[] = [
    {
        placeholder: 'כתובת אימייל',
        validationFuncs: [{ functionName: 'isEmailValid', errorMsg: 'כתובת אימייל לא תקינה' }],
        dbLabel: 'email',
        isRequired: true,
        value: ''
    },
    {
        placeholder: 'סיסמה',
        validationFuncs: [],
        dbLabel: 'password',
        isRequired: true,
        value: ''
    }
]

