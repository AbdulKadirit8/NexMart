import { configureStore } from "@reduxjs/toolkit"
import RootReducer from "./Reducers/RootReducer"
import { RootSaga } from "./Sagas/RootSaga"
import createSagaMiddleware from "redux-saga"

const saga = createSagaMiddleware()
const Store= configureStore({
    reducer:RootReducer,
    middleware:()=>[saga]
})

export default Store

saga.run(RootSaga)