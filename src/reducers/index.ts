import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AccountsReducer from './accountsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    accounts: AccountsReducer
});

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);
