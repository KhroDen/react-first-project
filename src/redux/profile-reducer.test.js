import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import react from 'react';

let state = {
	posts: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 14 },
		{ id: 2, post: "It's my first post", likesCount: 21 }
	]
};

it('length of post should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator("it-kama");
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(3);
});

it('post of new posts shoul be correct', () => {
	// 1. test data
	let action = addPostActionCreator("it-kama");
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts[2].post).toBe("it-kama");
});

it('after deleting length of posts should be decrement', () => {
	// 1. test data
	let action = deletePost(1);
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(1);
});

it('after deleting length should not be decrement if id is incorrect', () => {
	// 1. test data
	let action = deletePost(1000);
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(2);
});

