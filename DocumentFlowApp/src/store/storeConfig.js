import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import userManagement from './reducers/userManagement/userManagement';
import formManagement from './reducers/formManagement/formManagement';
import auth from './reducers/auth/auth';
import faqs from './reducers/faqs/faqs';
import requests from './reducers/requests/requests';
const rootReducer = combineReducers({
  userManagement,
  formManagement,
  auth,
  faqs,
  requests,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const middleware = applyMiddleware(thunk);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware),
);
export const PERSISTOR = persistStore(STORE);
