import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Action } from "./actionInterface";
import { toast } from 'react-toastify';

export const loginSuccess = (data: { email: string, password: string }) => {

    return (dispatch: Dispatch<Action>) => {
        let list = JSON.parse(localStorage.getItem('allUserData') || '')
        const user = list.find(
            (i: { email: string; password: string; }) => { return (i.email == data.email && i.password == data.password) }
        );
        if (user) {
            toast.success('Login Success');
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: data
            })
        }
        else {
            toast.error('Login Failed');
            dispatch({
                type: ActionType.LOGIN_ERROR,
            })
        }
    }
}

export const logoutSuccess = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGOUT_SUCCESS
        })
    }
}

export const registerSuccess = (data: object) => {
    return (dispatch: Dispatch<Action>) => {

        toast.success('Register Success');
        dispatch({
            type: ActionType.REGISTER_SUCCESS,
            payload: data
        })
    }
}