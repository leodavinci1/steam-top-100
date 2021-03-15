import { put, all, takeLatest } from 'redux-saga/effects';
import { Creators as loader } from '../ducks/loader';
import { Types as sessionTypes } from '../ducks/session';


const getUserData = {
  object: 'user',
  method: 'getData',
};

const getParams = data => {
  return {
    object: data.split('_')[2].toLowerCase(),
    method: data.split('_')[1].toLowerCase(),
  };
};

function* addLoader(params) {
  const { type } = params;
  const result = type === undefined ? params : getParams(type);
  yield put(loader.startLoading(result));
}

function* removeLoader(params) {
  const { type } = params;
  const result = type === undefined ? params : getParams(type);
  yield put(loader.stopLoading(result));
}

// TODO: CORRIGIR
function* SagaLoader() {
  yield all([
    takeLatest(sessionTypes.START_GET_EXAMPLE_SAGA, addLoader, getUserData),
    takeLatest(sessionTypes.SUCCESS_GET_EXAMPLE_SAGA, removeLoader, getUserData),
    takeLatest(sessionTypes.ERROR_GET_EXAMPLE_SAGA, removeLoader, getUserData),
  ]);
}

export default SagaLoader;
