import { IField } from "../../ILandingLoginPopup"

export const FORGET_PASSWORD_FIELD: IField[] = [
    {
        placeholder: 'כתובת מייל',
        validationFuncs: [{ functionName: 'isEmailValid', errorMsg: 'כתובת אימייל אינה תקינה' }],
        dbLabel: 'email',
        isRequired: true,
        value: '',
        type: ''
    },
]

export const FORGET_PASSWORD_FIELD_MANAGER = [
    {
        isValid: false,
        value: ''
    },
]

