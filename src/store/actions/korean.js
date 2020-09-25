//
export const REPLACE_KOREAN = 'REPLACE_KOREAN';

export const return_REPLACE_KOREAN = (payload) => {
    return {
        type: REPLACE_KOREAN,
        payload: payload
    }
};


//
export const GET_LIST_CARD_KOREAN = 'GET_LIST_CARD_KOREAN';


export const return_GET_LIST_CARD_KOREAN = (payload) => {
    return {
        type: GET_LIST_CARD_KOREAN,
        payload: payload
    }
};
