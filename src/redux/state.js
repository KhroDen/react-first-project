import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [
            { id: 1, post: 'Hi, how are you?', likesCount: 14 },
            { id: 2, post: "It's my first post", likesCount: 21 }
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],

        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kama?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        post: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state);
};

export default state;