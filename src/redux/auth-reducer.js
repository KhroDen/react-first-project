import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:

			return {
				...state,
				...action.payload,
			}

		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
	return authAPI.me()
		.then(Response => {
			if (Response.data.resultCode === 0) {
				let { id, email, login } = Response.data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});
}

export const login = (email, password, rememberMe) => (dispatch) => {

	authAPI.login(email, password, rememberMe)
		.then(Response => {
			if (Response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				let message = Response.data.messages.length > 0 ? Response.data.messages[0] : "Some error";
				dispatch(stopSubmit("login", { _error: message }));
			}
		});
}

export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(Response => {
			if (Response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		});
}

export default authReducer;