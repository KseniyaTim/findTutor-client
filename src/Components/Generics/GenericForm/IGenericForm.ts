import { IGenericField } from "../GenericField/IGenericField"

export interface IGenericForm {
    formTitle: string
    formFields: IGenericField[]
    setFormFields: React.Dispatch<React.SetStateAction<IGenericField[]>>
    buttonTitle: string
    handleButtonFunc: (...args: any[]) => void
}