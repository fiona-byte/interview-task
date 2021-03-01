import * as actionTypes from './types.js';
import axios from'axios';

export const fetchData = () => dispatch => {
    dispatch({
        type: actionTypes.FETCHING_DATA
    })
    axios.get('https://covidnigeria.herokuapp.com/api')
    .then(response => {
        dispatch ({
            type: actionTypes.FETCH_DATA,
            payload: response.data.data,
        });
        // console.log(response.data.data)
    })
    .catch(error => {
        dispatch ({
            type: actionTypes.ERROR_FETCHING_DATA,
            payload: error
        })
		console.log(error)
    })
}