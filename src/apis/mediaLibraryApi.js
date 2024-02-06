import * as urlApis from './constantsApi';
import axiosService from '../utils/axiosServiceUtils';

// MEDIA LIBRARY
export const mediaLibraryGetAllImageApi = (mediaSearchValue, mediaSortBy) => {
    return axiosService.getWithToken(urlApis.API_MEDIA_LIBRARY_GET_ALL_IMAGE_BY_USER + "?search_value=" + mediaSearchValue + "&sort_by=" + mediaSortBy);
};
export const mediaLibraryDeleteItemApi = (data) => {
    return axiosService.deleteWithToken(urlApis.API_MEDIA_LIBRARY_DELETE_ITEM, data);
};
export const mediaLibraryUploadImageApi = (data) => {
    return axiosService.postUploadImageWithToken(urlApis.API_MEDIA_LIBRARY_UPLOAD_IMAGE, data);
};
