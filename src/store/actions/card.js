//
export const REPLACE_CARD = 'REPLACE_CARD';

export const return_REPLACE_CARD = (payload) => {
    return {
        type: REPLACE_CARD,
        payload: payload
    }
};


//
export const GET_LIST_QUIZ = 'GET_LIST_QUIZ';
export const return_GET_LIST_QUIZ = (payload) => {
    return {
        type: GET_LIST_QUIZ,
        payload: payload
    }
};

export const BUILD_LIST_CARD = 'BUILD_LIST_CARD';
export const return_BUILD_LIST_CARD = (payload) => {
    return {
        type: BUILD_LIST_CARD,
        payload: payload
    }
};


export const MATCH_REWARD = 'MATCH_REWARD';
export const return_MATCH_REWARD = (payload) => {
    return {
        type: MATCH_REWARD,
        payload: payload
    }
};




export const CHANGE_CARD_FOCUSED = 'CHANGE_CARD_FOCUSED';
export const return_CHANGE_CARD_FOCUSED = (payload) => {
    return {
        type: CHANGE_CARD_FOCUSED,
        payload: payload
    }
};


export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const return_SUBMIT_ANSWER = (payload) => {
    return {
        type: SUBMIT_ANSWER,
        payload: payload
    }
};

