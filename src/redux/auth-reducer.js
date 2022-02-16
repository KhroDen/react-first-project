import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:

			return {
				...state,
				...action.payload,
			}

		default:
			return state;
	}
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })



export const getAuthUserData = () => async (dispatch) => {

	let Response = await authAPI.me();

	if (Response.data.resultCode === 0) {
		let { id, email, login } = Response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

	let Response = await authAPI.login(email, password, rememberMe, captcha);

	if (Response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (Response.data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		let message = Response.data.messages.length > 0 ? Response.data.messages[0] : "Some error";
		dispatch(stopSubmit("login", { _error: message }));
	}
}


export const getCaptchaUrl = () => async (dispatch) => {
	const Response = await securityAPI.getCaptchaUrl();
	const captchaUrl = Response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl));
}



export const logout = () => async (dispatch) => {

	let Response = await authAPI.logout();

	if (Response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;