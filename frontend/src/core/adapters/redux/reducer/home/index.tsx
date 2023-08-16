import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { Videos } from '../../../../../types';

const { Types, Creators } = createActions({
  getVideos: [],
  getVideosSuccess: ['videos'],
  getVideosFailure: ['error'],
});

export const INITIAL_STATE = Immutable<{ loading: boolean; videos: Videos[]; error: string }>({
  loading: false,
  videos: [],
  error: '',
});

const getVideos = (state = INITIAL_STATE) => state.set('loading', true).set('error', '');

const getVideosSuccess = (state = INITIAL_STATE, { videos }: { videos: Videos[] }) =>
  state.set('loading', false).set('videos', videos);

const getVideosFailure = (state = INITIAL_STATE, { error }: { error: string }) =>
  state.set('loading', false).set('error', error);

export const HomeTypes = Types;

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.GET_VIDEOS]: getVideos,
  [Types.GET_VIDEOS_SUCCESS]: getVideosSuccess,
  [Types.GET_VIDEOS_FAILURE]: getVideosFailure,
});

export const HomeActions = Creators;
