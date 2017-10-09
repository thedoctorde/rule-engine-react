
import initialState from './initialState';

export default function paramNameReducer(state = initialState.paramNames || [], action) {
  switch (action.type) {
    default:
      return state;
  }
}
