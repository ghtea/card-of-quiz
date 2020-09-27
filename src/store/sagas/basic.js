import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';


import * as actionsBasic from "../actions/basic";


export default function* basicSaga() {
    //yield takeEvery( theme.ADJUST_NEW_PALETTE_TO_THEME, adjustNewPaletteToTheme );
    
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


