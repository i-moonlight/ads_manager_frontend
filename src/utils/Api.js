import axios from "axios";
import { API_SERVER } from '../config/constant';

export default axios.create({
    baseURL: API_SERVER,

    headers: {
        'Content-Type': 'application/json'
    }
});
