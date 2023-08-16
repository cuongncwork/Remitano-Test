import { call, put } from 'redux-saga/effects';
import API from '../../../../services/api';
import { HomeTypes } from '../../reducer/home';
import { Videos } from '../../../../../types';

export function* getVideos() {
  try {
    const videos: Videos[] = yield call(API.getVideos);
    yield put({
      type: HomeTypes.GET_VIDEOS_SUCCESS,
      videos,
    });
  } catch (ex: any) {
    yield put({
      type: HomeTypes.GET_VIDEOS_FAILURE,
      error: { error: ex?.message || 'Get videos error' },
    });
  }
}
