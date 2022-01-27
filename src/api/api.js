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

	getAuth() {
		return instance.get(`auth/me`)
			.then(Response => {
				return Response.data;
			});
	},


}