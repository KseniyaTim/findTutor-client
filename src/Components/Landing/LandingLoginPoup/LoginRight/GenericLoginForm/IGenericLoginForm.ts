import { IField } from "../../ILandingLoginPopup"
import { LOGIN_TOGGLER_COMPS_LITERALS } from "../LoginRight.data"

export interface IGenericLoginForm {
    backButtonTitle?: string
    backCompType?: LOGIN_TOGGLER_COMPS_LITERALS
    setTempLoginComp: React.Dispatch<React.SetStateAction<LOGIN_TOGGLER_COMPS_LITERALS>>
    title?: string
    fields: IField[]
    errorMsg: string
    buttonText: string
    buttonFunc: (firstField: string, secondField: string) => Promise<void>
    nextComp?: LOGIN_TOGGLER_COMPS_LITERALS
}