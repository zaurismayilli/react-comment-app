

const commentType = {
    POST: "POST_REQUEST",
    REQUEST: 'FETCH_REQUEST',
    SUCCESS: 'FETCH_SUCCESS',
    FAIL: 'FETCH_FAIL'
};

const PostRequest = (payload) => {
    return {type: commentType.POST, payload}
}

const fetchRequest = (payload) => {
    return {type: commentType.REQUEST}
}

const fetchSuccess = (payload) => {
    return {type: commentType.SUCCESS, payload}
}

const fetchFail = (payload) => {
    return {type: commentType.FAIL, payload}
}

export {
    PostRequest,
    commentType,
    fetchRequest,
    fetchSuccess,
    fetchFail
}