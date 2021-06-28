import { ActionType } from "./types";

interface LoginAction {
    type: ActionType.LOGIN_SUCCESS
    payload: object
}

interface RegisterAction {
    type: ActionType.REGISTER_SUCCESS
    payload: object
}

interface logOutAction {
    type: ActionType.LOGOUT_SUCCESS
}

interface LoginErrorAction {
    type: ActionType.LOGIN_ERROR
}

export type Action = LoginAction | RegisterAction | logOutAction | LoginErrorAction
