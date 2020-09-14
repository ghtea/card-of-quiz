//
export const REPLACE_PALETTE = 'REPLACE_PALETTE';

export const return_REPLACE_PALETTE = (payload) => {
    return {
        type: REPLACE_PALETTE,
        payload: payload
    }
};


//
export const GET_LIST_PALETTE = 'GET_LIST_PALETTE';
export const GET_LIST_PALETTE_SUCCESS = 'GET_LIST_PALETTE_SUCCESS';
export const GET_LIST_PALETTE_FAILURE = 'GET_LIST_PALETTE_FAILURE';


export const return_GET_LIST_PALETTE = () => {
    return {
        type: GET_LIST_PALETTE
    }
};

export const return_GET_LIST_PALETTE_SUCCESS = (payload) => {
    return {
        type: GET_LIST_PALETTE_SUCCESS,
        payload: payload
    }
};

export const return_GET_LIST_PALETTE_FAILURE = () => {
    return {
        type: GET_LIST_PALETTE_FAILURE
    }
};

