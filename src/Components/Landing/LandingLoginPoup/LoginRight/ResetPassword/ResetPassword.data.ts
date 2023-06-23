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