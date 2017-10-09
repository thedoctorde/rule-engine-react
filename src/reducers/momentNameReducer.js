
import initialState from './initialState';

export default function momentNamesReducer(state = initialState.momentNames || [], action) {
  switch (action.type) {
    default:
      return state;
  }
}
