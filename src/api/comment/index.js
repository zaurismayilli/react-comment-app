import axios from 'axios';
import { BASE_API } from '../../const';

const commentApi = {
    get: async () => {
        return (await axios.get(`${BASE_API}comments`)).data
    },
    post: async (payload) => {
        return (await axios.post(`${BASE_API}comments`, payload)).data
    }
}

export default commentApi