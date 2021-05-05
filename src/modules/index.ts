import { combineReducers } from 'redux';
import changeTheme from './theme';

const reducer = combineReducers({
  changeTheme,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
