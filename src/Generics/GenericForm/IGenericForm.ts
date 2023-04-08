import { IGenericField } from "../GenericField/IGenericField"

export interface IGenericForm {
    formTitle: string
    formFields: IGenericField[]
    buttonTitle: string
}