export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const ac_LOG_IN = () => {
    return {
        type: LOG_IN_TRY
    }
};

export const ac_LOG_IN_SUCCESS = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        payload: data
    }
};

export const ac_LOG_IN_FAILURE = () => {
    return {
        type: LOG_IN_FAILURE
    }
};
