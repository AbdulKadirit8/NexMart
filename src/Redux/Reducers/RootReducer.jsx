import { combineReducers } from '@reduxjs/toolkit'
import MaincategoryReducer from './MaincategoryReducer'
import SubcategoryReducer from './SubcategoryReducer'

export default combineReducers({
    maincategoryStateData: MaincategoryReducer,
    subcategoryStateData: SubcategoryReducer,

})