import {combineReducers} from 'redux';
import products from './product'
import ItemEditting from '../reducer/ItemEditting'
const appReducer = combineReducers({
    products,
    ItemEditting
});
export default appReducer