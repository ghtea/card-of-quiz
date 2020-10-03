import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';
import Cookies from 'js-cookie';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsAuth from "../../actions/auth";
//import * as actionsTheme from "../../actions/theme";



const requestCheck = (bodyReq) => {
    
    return axios.get(`${config.URL_BACK}/auth/check`,  bodyReq);
};


function* checkLoggedIn() {
        
        yield put( actionsBasic.return_REPLACE_BASIC({
            location: ['ready', 'user'],
            replacement: false
        }) );
        
        yield put( actionsBasic.return_REPLACE_BASIC({
            location: ['loading', 'user'],
            replacement: true
        }) );
    
    
    const logged = Cookies.get('logged');   // https://www.npmjs.com/package/js-cookie
    console.log(logged)
    
    
    if(logged!=='yes') {
        
        console.log("no logged user");
        
        yield put( actionsAuth.return_REPLACE_AUTH({
            location: ['user'],
            replacement: {}
        }) );
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'user'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'user'],
                replacement: false
            }) );
    }
  
    else { // if there is token
    
        try {
            
            console.log("logged user");
            
            const bodyReq = {
                withCredentials: true, 
                credentials: 'include'
            };
            
            const { data } = yield call( requestCheck, bodyReq );
            console.log(data);
    
            yield put( actionsAuth.return_REPLACE_AUTH({
                location: ['user'],
                replacement: data
            }) );
            
                yield put( actionsBasic.return_REPLACE_BASIC({
                    location: ['ready', 'user'],
                    replacement: true
                }) );
                
                yield put( actionsBasic.return_REPLACE_BASIC({
                    location: ['loading', 'user'],
                    replacement: false
                }) );
            
        } 
        catch (error) { // token 정보가 잘못되었었으면 여기로 이동
            
            console.log('failed check');
            Cookies.remove('logged', { path: '/' });
            
            window.location.href = '/auth/log-in';
            
                yield put( actionsBasic.return_REPLACE_BASIC({
                    location: ['ready', 'user'],
                    replacement: false
                }) );
                
                yield put( actionsBasic.return_REPLACE_BASIC({
                    location: ['loading', 'user'],
                    replacement: false
                }) );
        }
        
        
    }
       
}

export default checkLoggedIn;
