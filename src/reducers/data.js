import * as actionTypes from '../actions/types';

const initialState = {
    fetchedData: [],
    states: [],
    loading: false,
    error: false,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                fetchedData: action.payload,
                states: action.payload.states,
                loading: false,
            };
        case actionTypes.ERROR_FETCHING_DATA:
			return {
				...state,
				error: true,
                loading: false,
			}
		case actionTypes.FETCHING_DATA:
			return {
				...state,
				loading: true
            }
        default:
            return state;
    }
}

export default dataReducer;