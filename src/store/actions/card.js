//
export const REPLACE_CARD = 'REPLACE_CARD';

export const return_REPLACE_CARD = (payload) => {
    return {
        type: REPLACE_CARD,
        payload: payload
    }
};


//
export const GET_LIST_CARD_QUIZ = 'GET_LIST_CARD_QUIZ';
export const GET_LIST_CARD_REWARD = 'GET_LIST_CARD_REWARD';

export const return_GET_LIST_CARD_QUIZ = (payload) => {
    return {
        type: GET_LIST_CARD_QUIZ,
        payload: payload
    }
};
export const return_GET_LIST_CARD_REWARD = (payload) => {
    return {
        type: GET_LIST_CARD_REWARD,
        payload: payload
    }
};
