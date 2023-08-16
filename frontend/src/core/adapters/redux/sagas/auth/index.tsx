import { call, put } from 'redux-saga/effects';
import { AuthTypes } from '../../reducer/auth';
import Cookies from 'js-cookie';
import { LoginParams } from '../../../../../types';
import API from '../../../../services/api';

export function* checkLoggedIn() {
  const token = Cookies.get('token');
  if (token) {
    API.addAuthorizationHeader(token);
  }
  yield put({
    type: AuthTypes.CHECK_LOGGED_IN_SUCCESS,
    payload: { isLoggedIn: !!token },
  });
}

export function* signIn({ params, type }: { params: LoginParams; type: string }) {
  try {
    const token: string = yield call(API.login, params);
    if (token) {
      yield put({
        type: AuthTypes.LOGIN_SUCCESS,
        payload: {
          isLoggedIn: true,
        },
      });
    }
  } catch (ex: any) {
    yield put({
      type: AuthTypes.LOGIN_FAILURE,
      payload: { error: ex?.message || 'Sign in error' },
    });
  }
}

export function* signOut() {
  yield put({ type: AuthTypes.SIGN_OUT_SUCCESS });
  Cookies.remove('token');
  Cookies.remove('expired');
}
