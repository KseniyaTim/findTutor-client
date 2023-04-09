export enum FIELDS_VALIDATORS_FUNCTIONS {
    checkLength = 'checkLength',
    maxLength = 'maxLength',
    minLength = 'minLength',
    onlyDigits = 'onlyDigits',
    onlyHebrewLetters = 'onlyHebrewLetters',
    checkEmail = 'checkEmail',
    phoneNumber = 'phoneNumber',
}

export type FIELDS_VALIDATORS_FUNCTIONS_LITERALS = keyof typeof FIELDS_VALIDATORS_FUNCTIONS;

export type fieldsValidatorsManager = { [literal in FIELDS_VALIDATORS_FUNCTIONS_LITERALS]:
    (...args: any[]) => boolean };


export interface IGenericField {
    label: string
    validationFuncs?: IFieldValidator[]
    required?: boolean
}

export interface IFieldValidator {
    funcName: FIELDS_VALIDATORS_FUNCTIONS_LITERALS
    param1?: any
    errorMessage: string
}