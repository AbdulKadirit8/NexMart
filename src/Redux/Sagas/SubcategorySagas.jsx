import { put, takeEvery } from "redux-saga/effects";
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant";
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Service";

// Real backend
// import { createRecord, getRecord, updateRecord, updateMultipartRecord } from "./Service";

function* createSaga(action){          //Worker Saga
    let response=yield createRecord("subcategory",action.payload)
    // let response=yield createMultipartRecord(action.payload)         //If record has file field
    yield put({type:CREATE_SUBCATEGORY_RED, payload:response})
}

function* getSaga(action){                                              //Worker Saga
    let response=yield getRecord("subcategory")
    yield put({type:GET_SUBCATEGORY_RED, payload:response})
}

function* updateSaga(action){                                           //Worker Saga
    yield updateRecord("subcategory",action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED, payload:action.payload})

    //Real backend
    // let response=yield updateMultipartRecord(action.payload)
    // yield put({type:UPDATE_SUBCATEGORY_RED, payload:response})
}

    function* deleteSaga(action){                                        //Worker Saga
    yield deleteRecord("subcategory",action.payload)
    yield put({type:DELETE_SUBCATEGORY_RED, payload:action.payload})
}

export function* SubcategorySagas(){ 
    yield takeEvery(CREATE_SUBCATEGORY, createSaga)                    //Watcher Saga
    yield takeEvery(GET_SUBCATEGORY, getSaga)                          //Watcher Saga
    yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)                    //Watcher Saga
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)                    //Watcher Saga
}