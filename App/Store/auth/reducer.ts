import { AuthActionsType } from './actions.type';
import { Action } from '../../Interfaces/types';
import { User } from '../../Interfaces/models';

export interface AuthDataState {
  loading: boolean;
  user: User | undefined;
  error: string;
}

const initialState: AuthDataState = {
  loading: false,
  user: undefined,
  error: ''
};

export default function authReducer(
  state: AuthDataState = initialState,
  action: Action
): AuthDataState {
  switch (action.type) {
    case AuthActionsType.SIGN_IN_USER: {
      return { ...state, loading: true };
    }
    case AuthActionsType.SIGN_IN_USER_SUCCESS: {
      const { user } = action;
      return { ...state, loading: false, user, error: '' };
    }
    case AuthActionsType.LOG_IN_USER: {
      return { ...state, loading: true };
    }
    case AuthActionsType.LOG_IN_USER_SUCCESS: {
      const { user } = action;
      return { ...state, loading: false, user, error: '' };
    }
    case AuthActionsType.AUTH_ERROR: {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
}
