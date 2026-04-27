import { all } from "redux-saga/effects";
import { MaincategorySagas } from "./MaincategorySagas";

export function* RootSaga(){
    yield all([
        MaincategorySagas(),
    ])
}