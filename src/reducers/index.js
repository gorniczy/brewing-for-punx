import { combineReducers } from 'redux';
import { data, fetchError } from './fetchApi';
import { captureAge } from './captureAge';
import { ifAdult, showDetails, captureIndex, showBeers } from './handleClick';

export default combineReducers({
    data,
    fetchError,
    showDetails,
    captureIndex,
    showBeers,
    captureAge,
    ifAdult
});
