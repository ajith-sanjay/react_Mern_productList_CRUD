import React from 'react';
import { render } from 'react-dom';
import {combineReducers , createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk';
import {adderReducer} from './reducers/adderReducer';
import {deleterReducer} from './reducers/deleterReducer';
import {fetchReducer} from './reducers/fetchReducer';
import AddList from './components/AddList';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const allReducers = combineReducers({
	FullItems : fetchReducer,
	deleteItem : deleterReducer,
	addItem : adderReducer
})
const applyMiddlewre = applyMiddleware(thunk , createLogger());

const store = createStore(allReducers , applyMiddlewre);


const App = () => (
  <div>
    <ItemList />
	<AddList />
  </div>
);

render(<Provider store = {store}><App /></Provider>, document.getElementById('app'));