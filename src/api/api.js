import * as axios from "axios";



const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { "API-KEY": "c60f88e0-b218-470c-b419-16feb783b904" }
});


export const usersAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(Response => {
				return Response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Obsolete method. Please use profileAPI object.')
		return profileAPI.getProfile(userId);
	},
}

export const profileAPI = {

	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(photoFile) {
		FormData = new FormData();
		FormData.append("image", photoFile);
		return instance.put(`profile/photo`, FormData);
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
	},
}