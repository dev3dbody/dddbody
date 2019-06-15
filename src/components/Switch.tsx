import React from 'react';
import { connect } from 'react-redux';
import Main from './Main/Main';
import Patient from './Patient/Patient';
import Appointment from './Appointment/Appointment';
import Treatment from './Treatment/Treatment';
import AddPatient from './Patient/AddPatient';
import Scanner from './Scanner/Scanner';
import { getScreen, IState } from '../redux/reducers';
import { IScreen } from '../redux/reducers/screen';

const Switch: React.FunctionComponent<{ screen: IScreen }> = ({ screen }) => {
  switch (screen) {
    case 'MAIN':
      return <Main />;
    case 'PATIENT':
      return <Patient />;
    case 'ADD_PATIENT':
      return <AddPatient />;
    case 'APPOINTMENT':
      return <Appointment />;
    case 'TREATMENT':
      return <Treatment />;
    case 'SCANNER':
      return <Scanner />;
    default:
      return <Main />;
  }
};

const mapStateToProps = (state: IState) => ({
  screen: getScreen(state),
});

export default connect(mapStateToProps)(Switch);
