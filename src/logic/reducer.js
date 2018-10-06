import {
    SEARCH_UPDATE,
    SEARCH_UPDATE_SUCCESS,
    SEARCH_UPDATE_FAILED,
    FETCH_POSTS,
    FETCH_POSTS_FAILED
} from './actionType';

function searchReducer(state , action) {
    switch (action.type) {
        case SEARCH_UPDATE: {
            return {
                ...state,
                ...action.payload
            }

        }
        case FETCH_POSTS: {
            return {
                ...state,
                ...action.payload
            }

        }
        
        case FETCH_POSTS_FAILED: {
            return {
                ...state,
                ...action.payload
            }

        }
        case SEARCH_UPDATE_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SEARCH_UPDATE_FAILED: {
            return {
                ...state,
                ...action.payload
            }

       }
        default: {
            return state;
        }
    }
}

export default searchReducer;
