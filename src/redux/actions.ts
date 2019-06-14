import { createAction } from 'typesafe-actions';
import { IScreen } from '../redux/reducers';

export const navigate = createAction('NAVIGATE', action => {
  return (screen: IScreen) => action(screen);
});
