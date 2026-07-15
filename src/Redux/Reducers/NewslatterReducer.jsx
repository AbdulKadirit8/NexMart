import React from 'react'
import {
     CREATE_NEWSLATTER_RED, DELETE_NEWSLATTER_RED, GET_NEWSLATTER_RED, UPDATE_NEWSLATTER_RED } from '../Constant';

export default function NewslatterReducer(state = [], action) {
    let index
    switch (action.type) {
        case CREATE_NEWSLATTER_RED:
            return [...state, action.payload]

        case GET_NEWSLATTER_RED:
            return action.payload

        case UPDATE_NEWSLATTER_RED:
            index = state.findIndex(x => x.id === action.payload)
            state[index] = { ...action.payload }
            return state

        case DELETE_NEWSLATTER_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}
