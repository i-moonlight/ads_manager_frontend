import * as statusTypes from '../constants/statusTypes';

const pickStatusColor = (value = '') => {
    if (value.includes(statusTypes.BUDGET_MAXED)) {
        return 'danger';
    } else if (value.includes(statusTypes.SCHEDULED) || value.includes(statusTypes.EXPIRED) || value.includes(statusTypes.PAUSED)) {
        return 'warning';
    } else if (value.includes(statusTypes.ACTIVE)) {
        return 'success';
    }

    return 'secondary';
};

export default pickStatusColor;
