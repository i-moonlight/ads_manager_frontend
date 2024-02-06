import { useEffect } from 'react';
import * as actions_AdsManagerLAT from '../views/ads-manager/common/AdsManagerLibraryActionType';
import { useAdsManagerLibraryConsumer } from '../views/ads-manager/common/AdsManagerLibraryContext';

const useRefreshByUser = ({ isRefreshByUser, isFetching, refetch }) => {
    const { dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();

    useEffect(() => {
        if (isRefreshByUser) refetch();
    }, [isRefreshByUser]);

    useEffect(() => {
        if (!isFetching) {
            dispatch_AdsManagerLC({ type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_BY_USER, payload: false });
        }
    }, [isFetching]);
};

export default useRefreshByUser;
