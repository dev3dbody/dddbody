import { createReducer } from 'typesafe-actions';
import { navigate, IAction } from '../actions';

export type IScreen =
  | 'MAIN'
  | 'PATIENT'
  | 'ADD_PATIENT'
  | 'APPOINTMENT'
  | 'ADD_APPOINTMENT'
  | 'TREATMENT'
  | 'SCANNER';

const screen = createReducer<IScreen, IAction>('MAIN').handleAction(
  navigate,
  (_, action) => action.payload,
);

export default screen;
