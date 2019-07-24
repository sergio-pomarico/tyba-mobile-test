import { AuthActionsType } from './actions.type';
import { Action } from '../../Interfaces/types';
import { User } from '../../Interfaces/models';

export interface AuthDataState {
  user: User | undefined;
  error: string;
}

const initialState: AuthDataState = {
  user: undefined,
  error: ''
};

export default function authReducer(
  state: AuthDataState = initialState,
  action: Action
): AuthDataState {
  switch (action.type) {
    case AuthActionsType.SIGN_IN_USER: {
      return { ...state };
    }
    case AuthActionsType.SIGN_IN_USER_SUCCESS: {
      const { user } = action;
      return { ...state, user, error: '' };
    }
    case AuthActionsType.LOG_IN_USER: {
      return { ...state };
    }
    case AuthActionsType.LOG_IN_USER_SUCCESS: {
      const { user } = action;
      return { ...state, user, error: '' };
    }
    case AuthActionsType.AUTH_ERROR: {
      const { error } = action;
      return { ...state, error };
    }
    default:
      return state;
  }
}
