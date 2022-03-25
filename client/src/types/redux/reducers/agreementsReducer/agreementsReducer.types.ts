export interface Agreement {
  clauseOfAgrId: number;
  clauseOfAgr: string;
}

export interface AgreementsState {
  agreements: Agreement[];
}

/* eslint-disable no-unused-vars */

export enum AgreementsActionTypes {
  SET_AGREEMENTS = 'SET_AGREEMENTS',
}
/* eslint-enable no-unused-vars */

interface SetAgreementsAction {
  type: AgreementsActionTypes.SET_AGREEMENTS,
  payload: {
    agreements: Agreement[];
  }
}

export type Action = SetAgreementsAction;
