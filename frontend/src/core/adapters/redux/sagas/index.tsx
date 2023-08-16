import { all, takeLatest } from 'redux-saga/effects';
import { HomeTypes } from '../reducer/home';
import { AuthTypes } from '../reducer/auth';
import { checkLoggedIn, signIn, signOut } from './auth';
import { getVideos } from './home';

const authSagas = [
  takeLatest(AuthTypes.CHECK_LOGGED_IN, checkLoggedIn),
  takeLatest(AuthTypes.SIGN_IN, signIn),
  takeLatest(AuthTypes.SIGN_OUT, signOut),
];

const homeSagas = [takeLatest(HomeTypes.GET_VIDEOS, getVideos)];

export default function* root() {
  yield all([...homeSagas, ...authSagas]);
}
