import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  checkLoggedIn: [],
  checkLoggedInSuccess: ['token'],

  signIn: ['params'],
  signInSuccess: ['token'],
  signInFailure: ['error'],

  signOut: [],
});

export const INITIAL_STATE = Immutable({
  error: null,
  isProcessing: false,
  isLoggedIn: false,
});

const checkLoggedIn = (state = INITIAL_STATE) => state;

const checkLoggedInSuccess = (
  state = INITIAL_STATE,
  { payload }: { payload: { isLoggedIn: boolean } },
) => state.set('isLoggedIn', payload.isLoggedIn);

const requestAuth = (state = INITIAL_STATE) => {
  return state.set('isProcessing', true).set('error', null);
};

const requestAuthSuccess = (
  state = INITIAL_STATE,
  { payload }: { payload: { isLoggedIn: boolean } },
) => {
  const nextState = state
    .set('isLoggedIn', payload.isLoggedIn)
    .set('error', null)
    .set('isProcessing', false);
  return nextState;
};

const requestAuthFailure = (state = INITIAL_STATE, { payload }: { payload: { error: string } }) => {
  return state.set('error', payload.error).set('isProcessing', false);
};

const signOut = (state = INITIAL_STATE) => state;

export const AuthTypes = Types;

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_LOGGED_IN]: checkLoggedIn,
  [Types.CHECK_LOGGED_IN_SUCCESS]: checkLoggedInSuccess,
  [Types.SIGN_IN]: requestAuth,
  [Types.SIGN_IN_SUCCESS]: requestAuthSuccess,
  [Types.SIGN_IN_FAILURE]: requestAuthFailure,
  [Types.SIGN_OUT]: signOut,
});

export const AuthActions = Creators;
