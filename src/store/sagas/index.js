

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { commentType } from '../action/commentAction';

import commentSaga from './commentSaga';

function* rootSaga () {
    yield all([commentSaga()])
}

export default rootSaga;