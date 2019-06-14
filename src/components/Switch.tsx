import React from 'react';
import { connect } from 'react-redux';
import Main from './Main/Main';
import Patient from './Patient/Patient';
import { getScreen, IScreen, IState } from '../redux/reducers';

const Switch: React.FunctionComponent<{ screen: IScreen }> = ({ screen }) => {
  switch (screen) {
    case 'MAIN':
      return <Main />;
    case 'PATIENT':
      return <Patient />;
    default:
      return <Main />;
  }
};

const mapStateToProps = (state: IState) => ({
  screen: getScreen(state),
});

export default connect(mapStateToProps)(Switch);
