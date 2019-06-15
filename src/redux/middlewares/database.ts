import { Middleware } from 'redux';

import {
  listRequest,
  createRequest,
  updateRequest,
  removeRequest,
  listSuccess,
  createSuccess,
  updateSuccess,
  removeSuccess,
  IAction,
} from '../actions';

import { IResource, IModel } from '../reducers/data';
import { getType } from 'typesafe-actions';

const sampleData = {
  patients: [
    {
      id: 'patient-000001',
      name: 'First',
      surname: 'Patient',
      birthDate: '1988-12-12',
      comment: 'No comment for now',
    },
  ],
  appointments: [
    {
      id: 'appointment-000001',
      visitDate: '2019-06-15',
      interview: 'Some interview data',
      patientId: 'patient-000001',
    },
  ],
  scans: [
    {
      id: 'scan-000001',
      order: 1,
      mesh: 'lotsadata',
      appointmentId: 'appointment-000001',
    },
  ],
};

const database: Middleware = ({ dispatch }) => next => async (
  action: IAction,
) => {
  next(action);

  if (action.type === getType(listRequest)) {
    const { model }: { model: IModel } = action.payload;
    dispatch(listSuccess(model, sampleData[model]));
  }
  if (action.type === getType(createRequest)) {
    const {
      model,
      resource,
    }: { model: IModel; resource: IResource } = action.payload;
    dispatch(createSuccess(model, resource));
  }
  if (action.type === getType(updateRequest)) {
    const {
      model,
      resource,
    }: { model: IModel; resource: IResource } = action.payload;
    dispatch(updateSuccess(model, resource));
  }
  if (action.type === getType(removeRequest)) {
    const { model, id }: { model: IModel; id: string } = action.payload;
    dispatch(removeSuccess(model, id));
  }
};
export default database;
