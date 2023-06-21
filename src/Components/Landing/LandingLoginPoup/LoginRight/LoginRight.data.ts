export interface ILoginRightTogglers {
    setTempLoginComp: React.Dispatch<React.SetStateAction<LOGIN_TOGGLER_COMPS_LITERALS>>
}

export enum LOGIN_TOGGLER_COMPS {
    login = 'login',
    forgotPassword = 'forgotPassword',
    restorationCode = 'restorationCode',
    resetPassword = 'resetPassword'
}

export type LOGIN_TOGGLER_COMPS_LITERALS = keyof typeof LOGIN_TOGGLER_COMPS;

export type loginTogglerCompsType = { [literal in LOGIN_TOGGLER_COMPS_LITERALS]: any };

export const loginTogglerCompsManager: loginTogglerCompsType = {} as loginTogglerCompsType
