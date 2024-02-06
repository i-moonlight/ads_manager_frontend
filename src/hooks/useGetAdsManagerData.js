import { useSelector } from 'react-redux';
import { selectEndDate, selectStartDate } from '../store/slices/ads-manager';
import { useAdsManagerIndexQuery } from '../apis/ads-manager-api-slice';

const useGetAdsManagerData = (options) => {
    const startDate = useSelector(selectStartDate);
    const endDate = useSelector(selectEndDate);
    const { data, isLoading, isFetching, refetch } = useAdsManagerIndexQuery({ startDate, endDate }, options);

    return { data, isLoading, isFetching, refetch };
};

export default useGetAdsManagerData;
