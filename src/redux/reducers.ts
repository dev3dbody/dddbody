import { combineReducers } from 'redux';
import { createReducer, Action } from 'typesafe-actions';
import { navigate } from './actions';

export type IScreen =
  | 'MAIN'
  | 'PATIENT'
  | 'ADD_PATIENT'
  | 'VISIT'
  | 'ADD_VISIT'
  | 'TREATMENT';

const screen = createReducer<IScreen, Action>('MAIN')
  .handleAction(
    navigate,
    (state: IScreen, action: ReturnType<typeof navigate>) => action.payload,
  )
//  .handleAction(increment, (state, _) => state + 1);

const reducer = combineReducers({ screen });
export default reducer;

export interface IState {
    screen: IScreen;
}

export const getScreen = (state: IState) => state.screen;
