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
    value: string
    isValid: boolean
}

export interface IGenericFieldComp {
    label: string
    validationFuncs?: IFieldValidator[]
    required?: boolean
    updateFieldState: (fieldIndex: number, state: boolean, value: string) => void
    fieldIndex: number
    value: string
    checkRequired?: number
}

export interface IFieldValidator {
    funcName: FIELDS_VALIDATORS_FUNCTIONS_LITERALS
    param1?: any
    errorMessage: string
}