import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../../config';

import * as colorScheme from "../../actions/colorScheme";
import * as theme from "../../actions/theme";



const getListColorScheme_request = () => {
  return axios.get(`${config.URL_BACK}/colorScheme`);
};


function* getListColorScheme() {
    try {
        const { data } = yield call( getListColorScheme_request );
        //console.log(data);
        
        yield put( colorScheme.return_REPLACE_COLOR_SCHEME({
            location: ['listColorScheme'],
            replacement: data
        }) );
        
        
    } catch (error) {
        
        console.log('GET_LIST_COLOR_SCHEME has been failed');
        //yield put( colorScheme.return_GET_LIST_COLOR_SCHEME_FAILURE() )
    }
}

export default getListColorScheme;


/*

        
        yield put({
            type: colorScheme.REPLACE_COLOR_SCHEME,
            payload: {
                location: ['listColorScheme'],
                replacement: data
            }
        });
*/