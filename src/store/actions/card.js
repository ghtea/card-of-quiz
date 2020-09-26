//
export const REPLACE_CARD = 'REPLACE_CARD';

export const return_REPLACE_CARD = (payload) => {
    return {
        type: REPLACE_CARD,
        payload: payload
    }
};


//
export const GET_LIST_CARD = 'GET_LIST_CARD';


export const return_GET_LIST_CARD = (payload) => {
    return {
        type: GET_LIST_CARD,
        payload: payload
    }
};
