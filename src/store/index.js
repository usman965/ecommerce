import { createStore } from 'redux';
import rootReducer from "./reducers/index"; // You need to create this

const store = createStore(rootReducer);

export default store;