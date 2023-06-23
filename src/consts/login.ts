import { IFieldValidators } from "../utils/validations/validators"

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
