
import { IFieldValidator, fieldsValidatorsManager } from '../Components/Generics/GenericField/IGenericField'

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
    onlyHebrewLetters: (textToCheck: string): boolean => {
        return /^[\u0590-\u05FF ,.'-]+$/i.test(textToCheck)
    },
    required: (textToCheck: string): boolean => {
        return textToCheck.length > 0
    },
    phoneNumber: (textToCheck: string): boolean => {
        return textToCheck.length === 10 && textToCheck[0] === '0'
    },
    checkEmail: (textToCheck: string): boolean => {
        return /^(?=.{1,254}$)(?=.{1,64}@)(?:(?!@)[\w\u00A1-\uFFFF-])+@(?:[a-zA-Z0-9](?:[\w\u00A1-\uFFFF-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i.test(textToCheck)
    },

};

export const checkValidaitons = (textValue: string, validators: IFieldValidator[]) => {
    let isTextValid = true, validFuncIndex
    for (
        validFuncIndex = 0;
        validFuncIndex < validators.length && isTextValid;
        validFuncIndex++
    ) {
        isTextValid = textFieldsFuncValidators[validators[validFuncIndex].funcName](
            textValue,
            validators[validFuncIndex].param1,
        );
    }
    return { isTextValid, validFuncIndex }
}