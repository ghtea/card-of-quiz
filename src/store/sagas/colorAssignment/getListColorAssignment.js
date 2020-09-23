import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../../config';

import * as colorAssignment from "../../actions/colorAssignment";
import * as theme from "../../actions/theme";



const getListColorAssignment_request = () => {
  return axios.get(`${config.URL_BACK}/colorAssignment`);
};


function* getListColorAssignment() {
    try {
        const { data } = yield call( getListColorAssignment_request );
        console.log(data);
        
        yield put( colorAssignment.return_REPLACE_COLOR_ASSIGNMENT({
            location: ['listColorAssignment'],
            replacement: data
        }) );
        
        
    } catch (error) {
        
        console.log('GET_LIST_COLOR_ASSIGNMENT has been failed');
        //yield put( colorAssignment.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListColorAssignment;


/*

        
        yield put({
            type: colorAssignment.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/