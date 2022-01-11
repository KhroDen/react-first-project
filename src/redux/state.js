const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 14 },
                { id: 2, post: "It's my first post", likesCount: 21 }
            ],
            newPostText: 'it-kama'
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

    },
    _callsubscriber() { },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },


    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callsubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        }
    }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
// если функция только возвращает данные, то можно обойтись без слова return и обернуть в круглые скобки

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}


export default store;