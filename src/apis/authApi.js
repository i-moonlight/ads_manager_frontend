import * as urlApis from './constantsApi';
import axiosService from '../utils/axiosServiceUtils';

export const loginSecureEmailLink = (token_sesame) => {
    return axiosService.get(urlApis.API_SECURE_LOGIN + token_sesame);
};
export const loginGetSecureEmailLink = (data) => {
    return axiosService.post(urlApis.API_GET_SECURE_LOGIN, data);
};
export const loginFacebookApi = (data) => {
    return axiosService.post(urlApis.API_FACEBOOK_LOGIN, data);
};
export const loginGoogleApi = (data) => {
    return axiosService.post(urlApis.API_GOOGLE_LOGIN, data);
};
export const loginLinkedInApi = (data) => {
    return axiosService.post(urlApis.API_LINKEDIN_LOGIN, data);
};
export const loginPinterestApi = (data) => {
    return axiosService.post(urlApis.API_PINTEREST_LOGIN, data);
};
export const loginSnapchatApi = (data) => {
    return axiosService.post(urlApis.API_SNAPCHAT_LOGIN, data);
};
export const loginTiktokApi = (data) => {
    return axiosService.post(urlApis.API_TIKTOK_LOGIN, data);
};

// 
export const loginApi = (data) => {
    return axiosService.postLogin(urlApis.API_LOGIN_POST, data);
};
export const deleteAccountApi = (data) => {
    return axiosService.deleteWithToken(urlApis.API_DELETE_ACCOUNT, data);
};

