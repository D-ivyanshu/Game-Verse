import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '88567fbf312c4bb89eeda285a1d8c96b' 
    }
})