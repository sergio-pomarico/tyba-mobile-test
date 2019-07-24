import { AuthActionsType } from './actions.type';
import { User } from '../../Interfaces/models';

export const signin = (email: string, password: string) => ({
  email,
  password,
  type: AuthActionsType.SIGN_IN_USER
});

export const signinSuccess = (user: User) => ({
  user,
  type: AuthActionsType.SIGN_IN_USER_SUCCESS
});

export const login = (email: string, password: string) => ({
  email,
  password,
  type: AuthActionsType.LOG_IN_USER
});

export const loginSuccess = (user: User) => ({
  user,
  type: AuthActionsType.LOG_IN_USER_SUCCESS
});

// Handle errors
export const authError = (error: string) => ({
  type: AuthActionsType.AUTH_ERROR,
  error
});
