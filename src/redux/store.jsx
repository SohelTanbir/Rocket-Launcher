import { applyMiddleware, combineReducers, createStore } from "redux"
import dataReducer from '../redux/reducer/dataReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"


const middleware  = applyMiddleware(thunk);

const Reducers =  combineReducers({
    rockets: dataReducer
})

 const store  = createStore(Reducers, composeWithDevTools(middleware))


 export default store