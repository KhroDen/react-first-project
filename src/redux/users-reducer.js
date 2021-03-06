import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/object-helpers"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],

};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				// пример рефакторинга
				// создали общую вспомогательную функцию updateObjectInArray, находится в utils
				// передали в нее нужные параметры, она заменяет следующие 6 строк
				// users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				// users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}

		default:
			return state;
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const requestUsers = (page, pageSize) => {

	return async (dispatch) => {

		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		let data = await usersAPI.getUsers(page, pageSize)

		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setUsersTotalCount(data.totalCount));
	}
}

export const follow = (userId) => {
	return async (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		let Response = await usersAPI.follow(userId)

		if (Response.data.resultCode == 0) {
			dispatch(followSuccess(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		let Response = await usersAPI.unfollow(userId)

		if (Response.data.resultCode == 0) {
			dispatch(unfollowSuccess(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
	}
}

// пример рефакторинга
// вынесли общую логику в отдельную функцию

// const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
// 	dispatch(toggleFollowingProgress(true, userId));
// 	let Response = await apiMethod(userId);
// 	if (Response.data.resultCode == 0) {
// 		dispatch(actionCreator(userId));
// 	}
// 	dispatch(toggleFollowingProgress(false, userId));
// }

// export const follow = (userId) => {
// 	return async (dispatch) => {
// 		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
// 	}
// }

// export const unfollow = (userId) => {
// 	return async (dispatch) => {
// 		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
// 	}
// }



export default usersReducer;