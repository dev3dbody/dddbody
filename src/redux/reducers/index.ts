import { combineReducers } from 'redux';
import screen, { IScreen } from './screen';
import * as fromData from './data';
import data, { IData } from './data';
import * as fromLoading from './loading';
import loading, { ILoading } from './loading';

export interface IState {
  screen: IScreen;
  data: IData;
  loading: ILoading;
}

const reducer = combineReducers({ screen, data, loading });
export default reducer;

export const getScreen = (state: IState) => state.screen;

export const getData = (state: IState) => state.data;
export const getPatients = (state: IState) => fromData.getPatients(state.data);
export const getPatientsCount = (state: IState) =>
  fromData.getPatientsCount(state.data);
export const getAppointments = (state: IState) =>
  fromData.getAppointments(state.data);
export const getAppointmentsCount = (state: IState) =>
  fromData.getAppointmentsCount(state.data);
export const getScans = (state: IState) => fromData.getScans(state.data);
export const getScansCount = (state: IState) =>
  fromData.getScansCount(state.data);

export const getLoading = (state: IState) => state.loading;
export const getPatientsLoading = (state: IState) =>
  fromLoading.getPatientsLoading(state.loading);
export const getAppointmentsLoading = (state: IState) =>
  fromLoading.getAppointmentsLoading(state.loading);
export const getScansLoading = (state: IState) =>
  fromLoading.getScansLoading(state.loading);
