//
export const REPLACE_COLOR_ASSIGNMENT = 'REPLACE_COLOR_ASSIGNMENT';

export const return_REPLACE_COLOR_ASSIGNMENT = (payload) => {
    return {
        type: REPLACE_COLOR_ASSIGNMENT,
        payload: payload
    }
};


//
export const GET_LIST_COLOR_ASSIGNMENT = 'GET_LIST_COLOR_ASSIGNMENT';


export const return_GET_LIST_COLOR_ASSIGNMENT = () => {
    return {
        type: GET_LIST_COLOR_ASSIGNMENT
    }
};
