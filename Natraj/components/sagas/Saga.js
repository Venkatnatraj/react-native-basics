import {ADD , ASYNC_ADD} from '../constants/Constant'
import {delay , put , take} from 'redux-saga/effects'


export function* ayncADD(){
    yield delay(2000);
    yield put({type : ASYNC_ADD , payload : 5})
}


export function* watcherSaga(){
    yield take(ADD , ayncADD)
}