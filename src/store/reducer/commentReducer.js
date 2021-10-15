import { commentType, fetchRequest } from "../action/commentAction"

const initialComment = {
    loading: false,
    errors: [],
    comments: []
}

const commentRecuer = (state = initialComment, action) => {
    switch (action.type) {
        case commentType.REQUEST:

            return {
                ...state,
                loading: true
            };
        case commentType.SUCCESS:

            return {
                ...state,
                comments: [...state.comments, ...action.payload],
                errors: []
            }
        case commentType.FAIL:

            return {
                ...state,
                comments: [],
                errors: [...state.comments, ...action.payload],
            };

            default : 
            return state;
    }
}

export default commentRecuer;