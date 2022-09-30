export interface UsersState {
  user: {
    username: string;
    userId: number;
    isAdmin: boolean;
  }
  isAuth: boolean;
}

/* eslint-disable no-unused-vars */

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  SET_IS_AUTH = 'SET_IS_AUTH',
}
/* eslint-enable no-unused-vars */

interface SetUserAction {
  type: UserActionTypes.SET_USER,
  payload: {
    username: string;
    userId: number;
    isAdmin: boolean;
  }
}

interface SetIsAuthTrueAction {
  type: UserActionTypes.SET_IS_AUTH,
  payload: {
    isAuth: true,
  }
}

export type Action = SetUserAction | SetIsAuthTrueAction;
