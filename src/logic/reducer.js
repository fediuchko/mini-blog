import {
FETCH_POSTS_SUCCESS,
    FETCH_POSTS,
    FETCH_POSTS_FAILED
} from './actionType';

function fetchReducer(state , action) {
    switch (action.type) {
       
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
        case FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
    
        default: {
            return {
                state
            }
        }
    }
}

export default fetchReducer;
