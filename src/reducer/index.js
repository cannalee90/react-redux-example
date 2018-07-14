import { combineReducers } from 'redux';

const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
  if (action.type === USER_SIGNOUT) {
  }
  return appReducer(state, action);
}

export default rootReducer;