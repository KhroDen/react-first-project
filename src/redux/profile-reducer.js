import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


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
		case DELETE_POST: {
			return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
		}
		case SAVE_PHOTO_SUCCESS: {
			return { ...state, profile: { ...state.profile, photos: action.photos } }
		}

		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
// если функция только возвращает данные, то можно обойтись без слова return и обернуть в круглые скобки

export const getUserProfile = (userId) => async (dispatch) => {
	let Response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(Response.data));
}

export const getStatus = (userId) => async (dispatch) => {
	let Response = await profileAPI.getStatus(userId)
	dispatch(setStatus(Response.data));
}

export const updateStatus = (status) => async (dispatch) => {
	let Response = await profileAPI.updateStatus(status)
	if (Response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export const savePhoto = (file) => async (dispatch) => {
	let Response = await profileAPI.savePhoto(file);
	if (Response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(Response.data.data.photos));
	}
}



export default profileReducer;