export enum NAVBAR_FUNCTIONS {
    openLoginPopup = 'openLoginPopup',
    toRegister = 'toRegister'
}

export type NAVBAR_FUNCTIONS_LITERALS = keyof typeof NAVBAR_FUNCTIONS;

export type navbarFunctionsManager = { [literal in NAVBAR_FUNCTIONS_LITERALS]:
    (...args: any[]) => any };


export interface INavbarHeadline {
    label: string;
    funcName: NAVBAR_FUNCTIONS_LITERALS
}