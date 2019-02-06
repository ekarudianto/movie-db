import { UPDATE_PAGINATION, UPDATE_LIST, UPDATE_SEARCH } from '../actions/constant';

const initialState = {
  currentPagination: 1,
  list: {},
  search: '',
};

const action = { type: null, payload: null };
const rootReducer = (state = initialState, { type, payload } = action) => {

  switch (type) {
    case UPDATE_PAGINATION:
      return Object.assign({}, state, {
        currentPagination: payload
      });

    case UPDATE_LIST:
      return Object.assign({}, state, {
        list: payload
      });

    case UPDATE_SEARCH:
      return Object.assign({}, state, {
        search: payload
      });

    default: 
      return state;
  }
}

export default rootReducer;