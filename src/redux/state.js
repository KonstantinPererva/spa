import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 0, message: "Lorem ipsum.", likesCount: 12},
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing.", likesCount: 4},
            {id: 2, message: "Lorem ipsum dolor sit amet.", likesCount: 7},
        ],
        newPostText: 'it'
    },
    dialogPage: {
        dialogs: [
            {id: 0, name: "Kostya"},
            {id: 1, name: "Sasha"},
            {id: 2, name: "Viktor"},
        ]
    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: state.profilePage.posts.length,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;

