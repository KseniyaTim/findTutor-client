import { IField } from "../../ILandingLoginPopup"

export const FORGET_PASSWORD_FIELDS: IField[] = [
    {
        placeholder: 'כתובת מייל',
        validationFuncs: [{ functionName: 'isEmailValid', errorMsg: 'כתובת אימייל אינה תקינה' }],
        dbLabel: 'email',
        isRequired: true,
        value: '',
        isValid: false,
        type: ''
    },
]

export const FORGOT_PASSWORD_INFO = {
    ERROR_MSG: 'שם משתמש או סיסמא שגויים',
    BACK_BUTTON_TITLE: 'חזור',
    TITLE: 'הזן כתובת מייל לשחזור',
    BUTTON_TEXT: 'שחזור סיסמה',
}


