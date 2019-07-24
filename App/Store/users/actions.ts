import { UsersActionsType } from './actions.type';
import { User } from '../../Interfaces/models';

export const getUser = (userId: number) => ({
  userId,
  type: UsersActionsType.GET_USER
});

export const getUserSuccess = (user: User) => ({
  user,
  type: UsersActionsType.GET_USER_SUCCESS
});

// Handle errors
export const getUserError = (error: string) => ({
  error,
  type: UsersActionsType.GET_USER_ERROR
});
