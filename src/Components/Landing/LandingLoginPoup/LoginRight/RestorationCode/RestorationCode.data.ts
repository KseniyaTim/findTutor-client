import { IField } from "../../ILandingLoginPopup"

export const RESTORATION_CODE_FIELD: IField[] = [
    {
        placeholder: 'קוד איפוס סיסמה',
        validationFuncs: [{ functionName: 'minLength', errorMsg: 'הקוד חייב להזין 6 תווים', param1: '6' },],
        dbLabel: 'code',
        isRequired: true,
        value: '',
        isValid: false,
        type: ''
    },
]

export const RESTORATION_CODE_INFO = {
    ERROR_MSG: 'קוד שחזור שגוי',
    BUTTON_TEXT: 'אישור',
    MAIN_TITLE: 'הזן קוד שחזור',
}
