import { call, put, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "./actionType";

function* getAllPost (action) {
    try {
        const getAllResponse =  yield call(() => {
            return fetch(" https://jsonplaceholder.typicode.com/posts")
                    .then(res => res.json())
            }
        ); console.log  ( 'jdvsdlkj' + getAllResponse )
   
        yield put({
            type: actionTypes.FETCH_POSTS_SUCCESS,
            payload: {
                ...getAllResponse
            }
        });
    } catch (error) {
        console.log(error.message);
        yield put({
            type: actionTypes.FETCH_POSTS_FAILED,
            payload: { data: {post: [] } }
        });
    }
}

export default function* searchSaga() {
    yield all([
        takeLatest(actionTypes.FETCH_POSTS, getAllPost),
    ]);
}
