import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { messages } from "@availabs/avl-components"

import { Reducers } from "ams/src"

const reducer = combineReducers({
  ...Reducers,
  messages
});

export default createStore(reducer, applyMiddleware(thunk))
