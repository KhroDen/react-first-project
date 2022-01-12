import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            ],
            newMessageBody: ""
        },
        sidebar: {},

    },
    _callsubscriber() { },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },


    dispatch(action) { 
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callsubscriber(this._state);

    }

}

export default store;