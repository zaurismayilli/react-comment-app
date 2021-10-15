
import commentApi from '../api/comment'
export const getComment = async () =>  {
    try {
        const response = await commentApi.get();
        return response
    }catch(e) {
        Error (e.toString())
    }
  }

  export const postComment = async (payload) =>  {
    console.log("data",  payload)
    try {
        const response = await commentApi.post(payload);
        return response
    }catch(e) {
       throw new Error (e.toString())
    }
  }

  