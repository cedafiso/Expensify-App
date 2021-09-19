import { createStore , combineReducers, applyMiddleware, compose} from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            auth: authReducer,
            filters: filtersReducer,
            }
        ), 
        composeEnhancers(applyMiddleware(thunk))
    // 
    );
    return store;
}
