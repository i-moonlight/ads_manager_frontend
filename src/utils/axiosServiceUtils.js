import axios from 'axios';
import { AlertError } from './alertUtils';

class AxiosService {
    constructor() {
        const instance = axios.create();
        this.instance = instance;
    }

    get(url, data) {
        // console.log("get(url, data)")
        return this.instance.get(url, data);
    }

    post(url, data) {
        return this.instance.post(url, data);
    }

    // //
    // getWithTokenOnHeaders(url) {
    //   const config = {
    //     headers: { "x-access-token": `${getToken()}` },
    //   };
    //   return this.instance.get(url, config);
    // }

    // getWithToken(url) {
    //   const config = {
    //     headers: { Authorization: `Bearer ${getToken()}` },
    //   };
    //   return this.instance.get(url, config);
    // }

    postLogin(url, data) {
        const username = data.email;
        const password = data.password;
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        const config = {
            headers: { Authorization: `Basic ${token}` }
        };
        return this.instance.post(url, data, config);
    }

    getWithToken(url) {
        const config = {
            headers: { Authorization: `${localStorage.getItem('_token')}` }
        };
        return this.instance.get(url, config);
    }

    postWithToken(url, data) {
        const config = {
            headers: { Authorization: `${localStorage.getItem('_token')}` }
        };
        return this.instance.post(url, data, config);
    }

    patchWithToken(url, data) {
        const config = {
            headers: { Authorization: `${localStorage.getItem('_token')}` }
        };
        return this.instance.patch(url, data, config);
    }

    deleteWithToken(url, data) {
        const config = {
            headers: { Authorization: `${localStorage.getItem('_token')}` },
            data
        };
        return this.instance.delete(url, config);
    }

    postUploadImageWithToken(url, data) {
        const config = {
            headers: {
                Authorization: `${localStorage.getItem('_token')}`,
                'Content-Type': 'application/json',
                accept: 'application/json'
            }
        };
        return this.instance.post(url, data, config);
    }
}

const newAxiosService = new AxiosService();

newAxiosService.instance.interceptors.response.use(undefined, (error) => {
    if (error.message === 'Network Error' && !error.response) {
        console.log('Network Error');
        AlertError('Oops! Something went wrong with the network. Please check your connection and refresh the page.');
        return {
            status: 'Network Error',
            data: null
        };
    } else {
        const { status } = error.response; //status, data, config
        if (status === 400) {
            // const { isAuthenticated } = store.getState().authentication;
            // if (isAuthenticated) {
            //   logoutWhenHasError();
            // }
            AlertError('Invalid request. Please check your input and try again.');
            return {
                status: 400,
                data: null
            };
        }
        if (status === 401) {
            // logoutWhenHasError();
            AlertError('Access denied. Please log in or provide valid credentials.');
            return {
                status: 401,
                data: null
            };
        }
    }
});

export default newAxiosService;
