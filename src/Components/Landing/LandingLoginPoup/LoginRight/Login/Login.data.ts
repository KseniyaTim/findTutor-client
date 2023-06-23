import { PASSWORD_FIELD } from "../../../../../consts/login"
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
        ...PASSWORD_FIELD
    },
]

export const LOGIN_INFO = {
    ERROR_MSG: 'שם משתמש או סיסמא שגויים',
    BUTTON_TEXT: 'התחבר',
    MAIN_TITLE: 'התחבר לחשבונך',
    SECONDARY_TITLE: 'אין לך חשבון?',
    SECONDARY_TITLE_LINK: 'הירשם עכשיו',
    FORGOT_PASSWORD: 'שכחתי סיסמה',
    GOOGLE_BUTTON_TEXT: 'התחבר עם גוגל',
}