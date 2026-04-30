import { combineReducers } from '@reduxjs/toolkit'
import MaincategoryReducer from './MaincategoryReducer'
import SubcategoryReducer from './SubcategoryReducer'
import BrandReducer from './BrandReducer'
import FeatureReducer from './FeatureReducer'
import ProductReducer from './ProductReducer'
import FaqReducer from './FaqReducer'
import SettingReducer from './SettingReducer'

export default combineReducers({
    maincategoryStateData: MaincategoryReducer,
    subcategoryStateData: SubcategoryReducer,
    brandStateData: BrandReducer,
    productStateData: ProductReducer,
    featureStateData: FeatureReducer,
    faqStateData: FaqReducer,
    settingStateData: SettingReducer,

})