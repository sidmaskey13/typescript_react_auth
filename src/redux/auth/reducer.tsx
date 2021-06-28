import { Action } from './actionInterface'
import { ActionType } from './types'


interface AuthState {
    token: string | null,
    isAuthenticated: boolean,
    user: object | null,
    userList?: { email: Text, password: Text }[]
}

const INITIAL_STATE: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: null,
    userList: JSON.parse(localStorage.getItem('listData') || '[]'),
}

if (localStorage.getItem('allUserData') == null) {
    localStorage.setItem('allUserData', JSON.stringify([]))
}

export default function (state = INITIAL_STATE, action: Action) {
    let list = JSON.parse(localStorage.getItem('allUserData') || '')

    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            localStorage.setItem('token', JSON.stringify("THIS_IS_TOKEN"))
            return {
                ...state,
                isAuthenticated: true,
                random: 'send'
            };
        case ActionType.LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: false,
            };
        case ActionType.LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                sac: 'daws'
            };

        case ActionType.REGISTER_SUCCESS:
            list.push(action.payload)
            localStorage.setItem('allUserData', JSON.stringify(list))
            return {
                ...state,
                isAuthenticated: false,
            };

        default:
            return state
    }
}
