import { combineReducers } from '@reduxjs/toolkit'
import MaincategoryReducer from './MaincategoryReducer'
import SubcategoryReducer from './SubcategoryReducer'
import BrandReducer from './BrandReducer'
import FeatureReducer from './FeatureReducer'
import ProductReducer from './ProductReducer'
import FaqReducer from './FaqReducer'
import SettingReducer from './SettingReducer'
import CartReducer from './CartReducer'
import WishlistReducer from './WishlistReducer'
import CheckoutReducer from './CheckoutReducer'
import NewslatterReducer from './NewslatterReducer'
import TestimonialReducer from './TestimonialReducer'
import ContactUsReducer from './ContactUsReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    maincategoryStateData: MaincategoryReducer,
    subcategoryStateData: SubcategoryReducer,
    brandStateData: BrandReducer,
    productStateData: ProductReducer,
    featureStateData: FeatureReducer,
    faqStateData: FaqReducer,
    settingStateData: SettingReducer,
    cartStateData: CartReducer,
    wishlistStateData: WishlistReducer,
    checkoutStateData: CheckoutReducer,
    newslatterStateData: NewslatterReducer,
    testimonialStateData: TestimonialReducer,
    contactUsStateData: ContactUsReducer,
    userStateData: UserReducer,

})