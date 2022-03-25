/* eslint-disable no-unused-vars */
import {
  Action,
  AgreementsActionTypes,
  AgreementsState,
} from
  '../../../types/redux/reducers/agreementsReducer/agreementsReducer.types';
import agreementsAPI from '../../../api/agreements.api';
/* eslint-enable no-unused-vars */

const initialState: AgreementsState = {
  agreements: [],
};

const agreementsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AgreementsActionTypes.SET_AGREEMENTS:
      return {
        ...state,
        agreements: action.payload.agreements,
      };
    default:
      return state;
  }
};

export const setAgreements = (agreements: any) => {
  return {
    type: AgreementsActionTypes.SET_AGREEMENTS,
    payload: {
      agreements,
    },
  };
};


export const getAllAgreements = () => async (dispatch: any) => {
  const agreements = await agreementsAPI.getAllAgreements();
  dispatch(setAgreements(agreements));
};

export const deleteAgreement = (clauseOfAgrId: number, token: string) =>
  async (dispatch: any) => {
    await agreementsAPI.deleteAgreement({token, clauseOfAgrId});
    dispatch(getAllAgreements());
  };

export const createAgreement = (clauseOfAgr: string, token: string) =>
  async (dispatch: any) => {
    await agreementsAPI.createAgreement({token, clauseOfAgr});
    dispatch(getAllAgreements());
  };


export default agreementsReducer;
