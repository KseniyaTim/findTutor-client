export enum FIELDS_VALIDATORS_FUNCTIONS {
    checkLength = 'checkLength',
    maxLength = 'maxLength',
    minLength = 'minLength',
    onlyDigits = 'onlyDigits',
    onlyHebrewLetters = 'onlyHebrewLetters',
    checkEmail = 'checkEmail',
    required = 'required',
    phoneNumber = 'phoneNumber',
}

export type FIELDS_VALIDATORS_FUNCTIONS_LITERALS = keyof typeof FIELDS_VALIDATORS_FUNCTIONS;

export type fieldsValidatorsManager = { [literal in FIELDS_VALIDATORS_FUNCTIONS_LITERALS]:
    (...args: any[]) => boolean };


export interface IGenericField {
    label: string
    validationFuncs?: FIELDS_VALIDATORS_FUNCTIONS_LITERALS[]
}