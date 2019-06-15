import { createReducer } from 'typesafe-actions';
import {
  IAction,
  listSuccess,
  createSuccess,
  updateSuccess,
  removeSuccess,
} from '../actions';

export type IModel = 'patients' | 'appointments' | 'scans';

export interface IData {
  patients: IPatient[];
  appointments: IAppointment[];
  scans: IScan[];
}

interface IPatient {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  comment: string;
}

interface IAppointment {
  id: string;
  visitDate: string;
  interview: string;
  patientId: string;
}

interface IScan {
  id: string;
  order: number;
  mesh: string;
  appointmentId: string;
}

export type IResource = IPatient | IAppointment | IScan;

const initData = {
  patients: [],
  appointments: [],
  scans: [],
};

const data = createReducer<IData, IAction>(initData)
  .handleAction(listSuccess, (state, action) => ({
    ...state,
    [action.payload.model]: action.payload.data,
  }))
  .handleAction(createSuccess, (state, action) => ({
    ...state,
    [action.payload.model]: [
      ...state[action.payload.model],
      action.payload.resource,
    ],
  }))
  .handleAction(updateSuccess, (state, action) => ({
    ...state,
    [action.payload.model]: [
      ...(state[action.payload.model] as IResource[]).filter(
        ({ id }) => id !== action.payload.resource.id,
      ),
      action.payload.resource,
    ],
  }))
  .handleAction(removeSuccess, (state, action) => ({
    ...state,
    [action.payload.model]: (state[action.payload.model] as IResource[]).filter(
      ({ id }) => id !== action.payload.id,
    ),
  }));

export default data;

export const getPatients = (state: IData) => state.patients;
export const getPatientsCount = (state: IData) => getPatients(state).length;
export const getAppointments = (state: IData) => state.appointments;
export const getAppointmentsCount = (state: IData) =>
  getAppointments(state).length;
export const getScans = (state: IData) => state.scans;
export const getScansCount = (state: IData) => getScans(state).length;
