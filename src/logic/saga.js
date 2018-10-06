import { call, put, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "./actionType";

function* getAllPost (action) {
    try {
        const searchResponse =  yield call(() => {
            return fetch(" https://jsonplaceholder.typicode.com/posts")
                    .then(res => res.json())
            }
        ); console.log  ( 'jdvsdlkj' + searchResponse )
   
        yield put({
            type: actionTypes.SEARCH_UPDATE_SUCCESS,
            payload: {
                ...searchResponse
            }
        });
    } catch (error) {
        console.log(error.message);
        yield put({
            type: actionTypes.SEARCH_UPDATE_FAILED,
            payload: { data: {post: [] } }
        });
    }
}

export default function* searchSaga() {
    yield all([
        takeLatest(actionTypes.SEARCH_UPDATE, getAllPost),
    ]);
}
