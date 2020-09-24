//
export const REPLACE_KOREAN = 'REPLACE_KOREAN';

export const return_REPLACE_KOREAN = (payload) => {
    return {
        type: REPLACE_KOREAN,
        payload: payload
    }
};


//
export const GET_CARD_KOREAN = 'GET_CARD_KOREAN';


export const return_GET_CARD_KOREAN = (payload) => {
    return {
        type: GET_CARD_KOREAN,
        payload: payload
    }
};
