import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store

//https://redux.js.org/tutorials/fundamentals/part-4-store