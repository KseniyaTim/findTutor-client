import { IField } from "../Components/Landing/LandingLoginPoup/ILandingLoginPopup"
import { IFieldValidators } from "../utils/validations/validators"

export const FORGOT_PASSWORD = {
    ERROR_MSG: 'שם משתמש או סיסמא שגויים',
    BACK_BUTTON_TITLE: 'חזור',
    TITLE: 'הזן כתובת מייל לשחזור',
    BUTTON_TEXT: 'שחזור סיסמה',
}

export const LOGIN = {
    ERROR_MSG: 'שם משתמש או סיסמא שגויים',
    BUTTON_TEXT: 'התחבר',
    MAIN_TITLE: 'התחבר לחשבונך',
    SECONDARY_TITLE: 'אין לך חשבון?',
    SECONDARY_TITLE_LINK: 'הירשם עכשיו',
    FORGOT_PASSWORD: 'שכחתי סיסמה',
    GOOGLE_BUTTON_TEXT: 'התחבר עם גוגל',
}

export const PASSWORD_VALIDATORS_FUNCS: IFieldValidators[] = [
    { functionName: 'oneUpperCaseLetter', errorMsg: 'חייבת להיות אות גדולה אחת' },
    { functionName: 'oneLowerCaseLetter', errorMsg: 'חייבת להיות אות קטנה אחת' },
    { functionName: 'oneDigit', errorMsg: 'חייבת להיות ספרה אחת' },
    { functionName: 'specialChar', errorMsg: 'חייב להיות תו מיוחד אחד' },
    { functionName: 'minLength', errorMsg: 'חייבת להיות לפחות 8 תווים', param1: '8' },
]

export const PASSWORD_FIELD = {
    validationFuncs: PASSWORD_VALIDATORS_FUNCS,
    dbLabel: 'password',
    isRequired: true,
    value: '',
    isValid: false,
    type: 'password'
}

