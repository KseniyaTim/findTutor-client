// interfaces

import { IFieldValidators, fieldsValidatorsManager } from "./validators";

// consts

export const textFieldsFuncValidators: fieldsValidatorsManager = {
    checkLength: (textToCheck: string, maxLength: number): boolean => {
        return textToCheck.length <= maxLength
    },
    maxLength: (textToCheck: string, maxLength: number): boolean => {
        return textToCheck.length <= maxLength
    },
    minLength: (textToCheck: string, minLength: number): boolean => {
        return textToCheck.length >= minLength
    },
    onlyDigits: (textToCheck: string): boolean => {
        return /^\d+$/.test(textToCheck)
    },
    isAbove: (textToCheck: string, maxNumber: string): boolean => {
        return +textToCheck <= +maxNumber
    },
    onlyHebrewLetters: (textToCheck: string): boolean => {
        return /^[\u0590-\u05FF ,.'-]+$/i.test(textToCheck)
    },
    required: (textToCheck: string): boolean => {
        return textToCheck.length > 0
    },
    isIdValid: (textToCheck: string): boolean => {
        return new RegExp(/^\d{0,9}$/).test(textToCheck);
    },
    phoneNumber: (textToCheck: string): boolean => {
        return textToCheck.length === 10 && textToCheck[0] === '0'
    },
    onlyHebrewAndDigits: (textToCheck: string): boolean => {
        return /^[\u0590-\u05FF ,.'-, \d]+$/i.test(textToCheck)
    },
    isEmailValid(textToCheck: string): boolean {
        return /^[\w.%+-]+@[A-Za-z0-9.-]+\.(?:[A-Za-z]{2,}|il)$/.test(textToCheck)
    },
    oneUpperCaseLetter(textToCheck: string): boolean {
        return /^[A-Z]+$/.test(textToCheck)
    },
    oneDigit(textToCheck: string): boolean {
        return /\d+/.test(textToCheck)
    },
    oneLowerCaseLetter(textToCheck: string): boolean {
        return /^[a-z]+$/.test(textToCheck)
    },
    specialChar(textToCheck: string): boolean {
        return /[!@#$%^&*(),.?":{}|<>]/.test(textToCheck)
    },

};

export const checkValidaitons = (textValue: string, validators: IFieldValidators[]) => {
    let isTextValid = true, validFuncIndex
    for (
        validFuncIndex = 0;
        validFuncIndex < validators.length && isTextValid;
        validFuncIndex++
    ) {
        isTextValid = textFieldsFuncValidators[validators[validFuncIndex].functionName](
            textValue,
            validators[validFuncIndex].param1,
            validators[validFuncIndex].param2,
        );
    }
    return { isTextValid, validFuncIndex }
}

export const isEmptyAndRequired = (textValue: string, isRequired: boolean) => {
    return isRequired && (!textValue.length || !/.*\S.*/.test(textValue))
}