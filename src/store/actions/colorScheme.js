//
export const REPLACE_COLOR_SCHEME = 'REPLACE_COLOR_SCHEME';

export const return_REPLACE_COLOR_SCHEME = (payload) => {
    return {
        type: REPLACE_COLOR_SCHEME,
        payload: payload
    }
};


//
export const GET_LIST_COLOR_SCHEME = 'GET_LIST_COLOR_SCHEME';


export const return_GET_LIST_COLOR_SCHEME = () => {
    return {
        type: GET_LIST_COLOR_SCHEME
    }
};
