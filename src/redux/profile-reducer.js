import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
	posts: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 14 },
		{ id: 2, post: "It's my first post", likesCount: 21 }
	],
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				post: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ""
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
// если функция только возвращает данные, то можно обойтись без слова return и обернуть в круглые скобки

export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId)
		.then(Response => {
			dispatch(setUserProfile(Response.data));
		});
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(Response => {
			dispatch(setStatus(Response.data));
		});
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(Response => {
			if (Response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
}



export default profileReducer;