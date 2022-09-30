/* eslint-disable no-unused-vars */
import {
  Action,
  UsersState,
  UserActionTypes,
} from '../../../types/redux/reducers/usersReducer/usersReducer.types';
/* eslint-enable no-unused-vars */
import usersAPI from '../../../api/users.api';

const initialState: UsersState = {
  user: {
    username: '',
    userId: 0,
    isAdmin: false,
  },
  isAuth: false,
};

const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: {
          username: action.payload.username,
          userId: action.payload.userId,
          isAdmin: action.payload.isAdmin,
        },
      };
    case UserActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};

export const setIsAuth = (isAuth: boolean) => {
  return {
    type: UserActionTypes.SET_IS_AUTH,
    payload: {
      isAuth: isAuth,
    },
  };
};

export const setUser = (username: string, userId: number, isAdmin: boolean) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: {
      username: username,
      userId: userId,
      isAdmin: isAdmin,
    },
  };
};


export const getUser = (token: string) => async (dispatch: any) => {
  const user = await usersAPI.profile({token});
  if (user) {
    dispatch(setIsAuth(true));
    dispatch(setUser(user.username, user.userId, user.isAdmin));
  }
};


export default usersReducer;
