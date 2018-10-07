import {
    SEARCH_UPDATE,FETCH_POSTS
} from './actionType';

export function searchUpdate(payload) {

    return {
        type: SEARCH_UPDATE,
        payload
    };
}
export function getAllPosts (payload) {

    return {
        type: FETCH_POSTS,
        payload
    };
}


