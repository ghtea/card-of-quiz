import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as colorScheme from "../actions/colorScheme";
import * as theme from "../actions/theme";


export default function* paletteSaga() {
    //yield takeEvery( theme.ADJUST_NEW_PALETTE_TO_THEME, adjustNewPaletteToTheme );
    
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


