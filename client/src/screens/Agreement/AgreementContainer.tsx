import * as React from 'react';
import Agreement from './Agreement';
import {useSelector} from 'react-redux';
/* eslint-disable no-unused-vars */
import {StoreTypes} from '../../types/redux/store.types';
/* eslint-enable no-unused-vars */

const AgreementContainer = () => {
  const agreementPoints = useSelector((state: StoreTypes) =>
    state.agreementsReducer.agreements);
  return (
    <Agreement agreementPoints={agreementPoints}/>
  );
};

export default AgreementContainer;
