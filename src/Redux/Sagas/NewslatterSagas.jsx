import { put, takeEvery } from "redux-saga/effects";
import { CREATE_NEWSLATTER, CREATE_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED, UPDATE_NEWSLATTER, UPDATE_NEWSLATTER_RED } from "../Constant";
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service";

// Real backend
// import { createRecord, getRecord, updateRecord, updateMultipartRecord } from "./Service";

function* createSaga(action){          //Worker Saga
    let response=yield createRecord("newslatter",action.payload)
    // let response=yield createMultipartRecord(action.payload)         //If record has file field
    yield put({type:CREATE_NEWSLATTER_RED, payload:response})
}

function* getSaga(action){                                              //Worker Saga
    let response=yield getRecord("newslatter")
    yield put({type:GET_NEWSLATTER_RED, payload:response})
}

function* updateSaga(action){                                           //Worker Saga
    yield updateRecord("newslatter",action.payload)
    yield put({type:UPDATE_NEWSLATTER_RED, payload:action.payload})

    //Real backend
    // let response=yield updateMultipartRecord(action.payload)
    // yield put({type:UPDATE_NEWSLATTER_RED, payload:response})
}

    function* deleteSaga(action){                                        //Worker Saga
    yield deleteRecord("newslatter",action.payload)
    yield put({type:DELETE_NEWSLATTER_RED, payload:action.payload})
}

export function* NewslatterSagas(){ 
    yield takeEvery(CREATE_NEWSLATTER, createSaga)                    //Watcher Saga
    yield takeEvery(GET_NEWSLATTER, getSaga)                          //Watcher Saga
    yield takeEvery(UPDATE_NEWSLATTER, updateSaga)                    //Watcher Saga
    yield takeEvery(DELETE_NEWSLATTER, deleteSaga)                    //Watcher Saga
}