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


