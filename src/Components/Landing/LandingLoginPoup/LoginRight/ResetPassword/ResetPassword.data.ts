import { PASSWORD_FIELD } from "../../../../../consts/login"
import { IField } from "../../ILandingLoginPopup"

export const RESET_PASSWORD_FIELDS: IField[] = [
    {
        placeholder: 'סיסמה חדשה',
        ...PASSWORD_FIELD
    },
    {
        placeholder: 'אמת סיסמה',
        ...PASSWORD_FIELD
    }
]

export const RESET_PASSWORD_INFO = {
    ERROR_MSG: 'הסיסמאות אינן תואמות',
    BUTTON_TEXT: 'אישור',
    MAIN_TITLE: 'הזן סיסמה חדשה',
}