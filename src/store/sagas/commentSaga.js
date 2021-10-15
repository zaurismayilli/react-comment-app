


import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {commentType, fetchRequest} from '../action/commentAction';
import {getComment, postComment} from '../../data/comment'
import { fetchSuccess } from '../action/commentAction';

function* handleComment () {
    const comments = yield call(getComment);
    console.log(comments, "comments")
    yield put(fetchSuccess(comments))
}

function* handleCommentPost ({payload}) {
    console.log(payload, "payload")
    //fetchRequest();
   yield call(postComment, payload);
    // yield put(fetchSuccess())
}


function* commentSaga () {
    yield takeEvery(commentType.REQUEST, handleComment);
    yield takeEvery(commentType.POST, handleCommentPost)
}

export default commentSaga;