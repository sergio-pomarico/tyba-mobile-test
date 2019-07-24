import { UsersActionsType } from './actions.type';
import { Action } from '../../Interfaces/types';
import { User } from '../../Interfaces/models';

export interface UsersDataState {
  users: User[];
  user: User | undefined;
  error: string;
}

const initialState: UsersDataState = {
  users: [],
  user: undefined,
  error: ''
};

export default function usersReducer(
  state: UsersDataState = initialState,
  action: Action
): UsersDataState {
  switch (action.type) {
    case UsersActionsType.GET_USER: {
      return { ...state };
    }
    case UsersActionsType.GET_USER_SUCCESS: {
      const { user } = action;
      return { ...state, user, error: '' };
    }
    case UsersActionsType.GET_USER_ERROR: {
      const { error } = action;
      return { ...state, error };
    }
    default:
      return state;
  }
}
