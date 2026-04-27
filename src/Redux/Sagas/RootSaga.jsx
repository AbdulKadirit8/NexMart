import { all } from "redux-saga/effects";
import { MaincategorySagas } from "./MaincategorySagas";
import { SubcategorySagas } from "./SubcategorySagas";


export function* RootSaga(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
    ])
}